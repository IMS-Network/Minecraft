const { ipcRenderer } = require('electron');
const config_man = require("../config_manager")

let config

function load_config(notify = true) {
    config = config_man.ensure_config()

    // User notifications.
    if (notify) {
        set_auth_selection(config.selection.last_selection_auth)
    }
}


window.addEventListener('load', () => {
    load_config()

    // Login Button
    let login_btn = document.getElementById("login_btn")
    login_btn.onmouseover = () => {
        if (login_btn.ariaDisabled != "true")
            login_btn.src = "resources/login_white.png"
    }
    login_btn.onmouseleave = () => {
        if (login_btn.ariaDisabled != "true")
            login_btn.src = "resources/login_black.png"
    }
    login_btn.onclick = play

    // Config Button
    let config_btn = document.getElementById("config_btn")
    config_btn.onmouseover = () => {
        config_btn.src = "resources/config_white.png"
    }
    config_btn.onmouseleave = () => {
        config_btn.src = "resources/config_black.png"
    }
    config_btn.onclick = open_config

    // Logout Button Onclick.
    let logout_btn = document.getElementById("logout_btn")
    logout_btn.onmouseover = () => {
        if (logout_btn.ariaDisabled != "true")
            logout_btn.src = "resources/logout_white.png"
    }
    logout_btn.onmouseleave = () => {
        if (logout_btn.ariaDisabled != "true")
            logout_btn.src = "resources/logout_black.png"
    }
    logout_btn.onclick = microsoft_logout

    // Auth Selection
    let login_select = document.getElementById("login_method")
    login_select.onchange = on_login_change
})

function open_config() {
    ipcRenderer.send("open_config")
}

function string_empty(string) {
    return !string
}

const valid_login_types = ["1", "2"]
function form_into_obj() {
    // Grab data.
    const username = document.getElementById("username").value
    const login_method = document.getElementById("login_method").value

    // Validation.
    if (
        string_empty(username) ||
        !valid_login_types.includes(login_method)
    )
        return
    
    return {
        username: username,
        login_method: parseInt(login_method),
    }
}

function play() {
    let form_data = form_into_obj()

    if (!form_data) {
        alert("Invalid data provided! Make sure you select a username.")
    } else {
        ipcRenderer.send("play_start", form_data)
    }
}

// Abstractions over common UI actions.
function logout_disable() {
    let logout_btn = document.getElementById("logout_btn")
    logout_btn.ariaDisabled = "true"
    logout_btn.src = "resources/logout_inactive.png"
}
function logout_enable() {
    let logout_btn = document.getElementById("logout_btn")
    logout_btn.ariaDisabled = "false"
    logout_btn.src = "resources/logout_black.png"
}

function disable_username() {
    let username_inp = document.getElementById("username")
    username_inp.disabled = true
}
function enable_username() {
    let username_inp = document.getElementById("username")
    username_inp.disabled = false
}
function set_username(username) {
    let username_inp = document.getElementById("username")
    username_inp.value = username
}
function clear_username() {
    set_username("")
}
function set_auth_selection(val) {
    document.getElementById("login_method").value = val
    on_login_change()
}

function disable_login() {
    let login_btn = document.getElementById("login_btn")
    login_btn.ariaDisabled = "true"
    login_btn.src = "resources/login_inactive.png"
}

function enable_login() {
    let login_btn = document.getElementById("login_btn")
    login_btn.ariaDisabled = "false"
    login_btn.src = "resources/login_black.png"
}

// Selectrion change
function on_login_change() {
    let value = document.getElementById("login_method").value

    switch (value) {
        case "2":
            on_offline_select()
            break
        case "1":
            on_microsoft_select()
            break
        default:
            on_none_select()
    }
}

function on_none_select() {
    disable_username()
    clear_username()
    logout_disable()
    disable_login()
}

function on_offline_select() {
    enable_username()
    logout_disable()
    if (!config.auth.offline)
        clear_username()
    else 
        set_username(config.auth.offline.name)
    
    enable_login()
}

function on_microsoft_select() {
    if (!config.auth.microsoft) {
        trigger_microsoft_auth()
        
    } else {
        on_microsoft_success()
    }
    
}

function on_microsoft_success() {
    logout_enable()
    disable_username()
    set_username(config.auth.microsoft.profile.name)
    enable_login()
}

ipcRenderer.on("microsoft_success", (event, new_config) => {
    config = JSON.parse(new_config)
    on_microsoft_success()
})
ipcRenderer.on("microsoft_fail", () => {
    set_auth_selection(2)
    alert("Microsoft login failed! Are you sure you have purchased the game?")
})

// Microsoft auth
function trigger_microsoft_auth() {
    ipcRenderer.send("microsoft_auth_begin")
}

function microsoft_logout() {
    ipcRenderer.send("microsoft_logout")
    set_auth_selection(2)
    config.auth.microsoft = null
}
