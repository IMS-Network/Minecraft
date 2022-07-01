---
description: איך מפעילים אימות דו-שלבי בשרת
---

# 🔓 איך עושים אדו"ש

אימות דו שלבי מונע ומגן על המשתמש שלכם ב 90% אחוז יותר מכל סיסמה שתעשו

{% hint style="info" %}
**אנחנו ממליצים להפעיל אימות דו שלבי**
{% endhint %}

## שלב 1

מקלידים את הפקודה הזאת

```
/2fa setup
```

אחרי זה עושים רווח ואז מכניסים את הסיסמה שלכם (הסיסמה שבעזרתה יצרתם את המשתמש)

## שלב 2

הורידו את מאמת החשבונות של גוגל

{% embed url="https://support.google.com/accounts/answer/1066447?co=GENIE.Platform=Android&hl=iw" %}
הסבר של גוגל על איך מורידים את מאמת החשבונות של גוגל
{% endembed %}

## שלב  3

עכשיו צריך לסרוק את הקוד, זה יביא אותכם לאתר &#x20;

![תמונה של ההודעה בצאט](<../../.gitbook/assets/image (1).png>)

בנוסף שימו לב לקודי גיבוי שהמערכת נותנת לכם

{% hint style="warning" %}
חשוב לשמור את הקודים בשביל לעשות שחזור
{% endhint %}

אחרי שתלחצו על הקישור זה יביא אתכם לאתר הזה, אנחנו עושים שימוש בקוד של [KarmaAPI](https://github.com/KarmaConfigs/KarmaAPI) \
וגם שימוש בקוד של [AuthenticatorAPI](https://github.com/infiniteloopltd/AuthenticatorAPI.com)

![תמונה של האתר הפשוט שמריץ את הקודים לאימות דו שלבי](<../../.gitbook/assets/image (4).png>)

אתם צריכים לסרוק את הקוד הזה אם האפלקצייה\
אחרי זה תראו ברשימה IMS - Network ושם השחקן שלכם

## סיימתם
