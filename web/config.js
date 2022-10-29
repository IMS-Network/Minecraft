// Don't touch if you don't know what you're doing!

const { ipcRenderer } = require('electron')
const config_man = require("../config_manager")

let config

function load_config() {
    config = config_man.ensure_config()
}

window.addEventListener('load', () => {
    load_config()

    let ram_amount = document.getElementById("ram_mb")
    ram_amount.value = config.settings.mem_alloc
    ram_amount.onkeydown = () => {return false}
    ram_amount.onkeyup = () => {return false}

    // Res
    let res_x = document.getElementById("res_x")
    res_x.value = config.settings.resolution.x

    let res_y = document.getElementById("res_y")
    res_y.value = config.settings.resolution.y

    let save_btn = document.getElementById("save_btn")
    save_btn.onmouseover = () => {
        save_btn.src = "resources/config/save_white.png"
    }
    save_btn.onmouseleave = () => {
        save_btn.src = "resources/config/save_black.png"
    }
    save_btn.onclick = save_config

    let fullscreen = document.getElementById("fullscreen")
    fullscreen.checked = config.settings.resolution.fullscreen
})

function parse_config() {
    let ram_amount = document.getElementById("ram_mb")
    let res_x = document.getElementById("res_x")
    let res_y = document.getElementById("res_y")
    let fullscreen = document.getElementById("fullscreen")
    return {
        mem_alloc: parseInt(ram_amount.value),
        resolution: {
            x: parseInt(res_x.value),
            y: parseInt(res_y.value),
            fullscreen: fullscreen.checked,
        },
    }
}

function save_config() {
    ipcRenderer.send("save_config", parse_config())
}
