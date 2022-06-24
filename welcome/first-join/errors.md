---
description: רשימת שגיאות ופתרונות אפשריים בשביל לתקן אותן
---

# 🚨 בעיות בכניסה לשרת

## Outdated client!

הגרסה שאתם נכנסים בה היא נמוכה\גבוהה מדי או לא נתמכת על ידי השרת שלנו\
**אנחנו תומכים בגרסאות  1.16 - 1.18 וגם גרסאות אלפיין שלנו**

## This server responded with an invalid server key

זה מערך ההגנה של מיינקראפט אמור להגן על שחקנים מפני שרתים מסוכנים או גרועים.\
&#x20;לרוב ההודעה מוצגת כתוצאה משגיאה.\
בגלל שלנו יש מערכת אבטחה אחרת אז לכן מדובר בשגיאה, לא אמור להיות לכם הודעה כזאת על המסך\
אם יש לכם הודעה כזאת על המסך **היכנסו שוב פעם**

## Took to long to log in <a href="#viewer-6b8i" id="viewer-6b8i"></a>

השרת לא יכול לאמת מי אתם כי minecraft.net לא הגיב, \
זה בעיה רק למי שיש מקורי או משתמש במערכת המקורי שלנו. \
יכול להיות שהאינטרנט שלכם איטי מידי.\
**הפתרון הוא פשוט לנסות להיכנס שוב פעם**

## You are not whitelisted on this server <a href="#viewer-ahrmo" id="viewer-ahrmo"></a>

\
לא נוספת (או הוסרת) לרשימת האנשים המורשים להתחבר לשרת. \
במקרה של השרת שלנו זה אומר שיש עדכון והצוות שלנו עובד קשה!\
לרוב אנחנו נמנעים משימוש בפונקציה כזאת בשרתים שלנו אנחנו עובדים \
במצב OPENDEV מה שאומר שכל הדברים נעשים מול השחקנים בלי להסתיר דברים\
זה גם אומר שיש יותר בעיות אבל זה חלק מהכיף :)&#x20;

## Connection refused: connect <a href="#viewer-ep8d9" id="viewer-ep8d9"></a>

אין שרת Minecraft פעיל בכתובת IP:Port שהכנסתם\
לא ניתן לגשת לשרת כולו (לא רק Minecraft).\
בדקו שהזנתם את כתובת השרת הנכונה (mc.ims-network.net)\
הפעילו מחדש את המשחק שלכם

## End of stream <a href="#viewer-atsc7" id="viewer-atsc7"></a>

השרת הפסיק לשלוח מידע חזרה ללקוח מסיבה כלשהי. \
יכול להיות שזמנית נקבע האינטרנט שלכם... קורה לפעמים

## Failed to login: Bad Login

יכול לקראות כאשר מנסים להיכנס מהר מידיי.\
בנוסף גם יכול להיות שאתם נכנסים מגרסה שאנחנו לא תומכים בה \
או שיש בעיות בכללי אם מערכת האבטחה שלנו

אשרו שאתם מפעילים את הגרסה הנכונה של מיינקראפט עבור השרת.\
בדוק את חיבור הרשת שלכם ואת זמן הפינג (Ping).\
&#x20;ייתכן שהשרת לא מכניס אתכם בגלל שהרשת איטית מכדי להגיב בזמן.

## Failed to login: the authentication servers are currently down for maintenance

השרת עשוי להציג ערך כמו com.mojang.authlib.GameProfile ... lost connection: Disconnected \


מי שמשתמש במערכת כניסת מקורי אפשר לרשום לנו אנחנו נסיר אתכם מהרשימה עד ששרתי האימות יחזרו לפעול (נחזיר אתכם "למצב פרוץ") לחכות לשרתי האימות לחזור, \
זה לא תלוי בנו זה עניין של חברת Mojang [לחצו כאן](https://pingserverstatus.com/minecraftauth.php) כדיי לדעת את מצב השרתים \
בידקו את [חומת האש](https://support.microsoft.com/he-il/windows/%D7%97%D7%95%D7%9E%D7%AA-%D7%90%D7%A9-%D7%95%D7%94%D7%92%D7%A0%D7%AA-%D7%A8%D7%A9%D7%AA-%D7%91-%D7%90%D7%91%D7%98%D7%97%D7%AA-windows-aef9838b-d081-fd75-3b1b-e5fa794c003b) שלכם כדי לוודא שהשרתים אינם חסומים -\
&#x20;בתי ספר ומקומות עבודה רבים חוסמים אתרי משחקים, וזה עשוי לכלול שרתי אימות של Minecraft.

## Failed to login: invalid IP <a href="#viewer-90dlo" id="viewer-90dlo"></a>

שרתי Mojang אינם מסוגלים לאמת את כתובת ה-IP שלך. \
פתרונות: \
לנתק ולחבר את האינטרנט למחשב שלכם \
לכבות ולהדליק את נתב האינטרנט שלכם \
לפנות לספק האינטרנט שלכם (יכול להיות שעד שהם יענו הבעיה תסתדר)\
לנסות שוב מאוחר יותר

## Internal Exception: io.netty.handler.timeout.ReadTimeoutException <a href="#viewer-dg4u1" id="viewer-dg4u1"></a>

המשחק לא הצליח לעמוד בקצב של השרת, או שהמחשב שלך לא יכול לעבד מהר מספיק, מה שגורם לך מסנכרון עם השרת. \
פתרונות\
השגת חיבור אינטרנט מהיר יותר (העדפה לחיבור באמצאות כבל אינטרנט), \
מחשב מהיר יותר, או פשוט סגירת תוכנות כלשהן שעשויות להכביד האינטרנט/כוח העיבוד של המחשב שלך. זכרו לבדוק את מגש המשימות ב-Windows - אפליקציות יכולות לצרוך הרבה משאבים מהאינטרנט\מהחשב.

## java.io.IOException: Server returned HTTP response code: 503 <a href="#viewer-88tab" id="viewer-88tab"></a>

השרת לא יכול לאמת מי אתם כי minecraft.net מושבת \
הבעייה הזאת יכולה להיות רק למי שמשתמש במקורי (במערכת מקורי) \
בדקו את אתר [Mojang](https://www.minecraft.net/en-us) כדי לבדוק אם יש הפסקות מתוכננות (תחזוקת שרת, עדכוני אתרים וכו')

אם זה נמשך ואין דיווחים על הפסקות, \
אפשר לרשום לנו אנחנו נסיר אתכם ממערכת מקורי עד שהבעיה תסתדר (נחזיר אתכם "למצב פרוץ")

## java.net.SocketException: Connection reset <a href="#viewer-iasp" id="viewer-iasp"></a>

השרת נסגר או שהוא עושה משהו מאוד אינטנסיבי.\
זה קורה גם כאשר חיבור האינטרנט שלכם מתבטל או משהו בין המשתמש לשרת מתנתק \
(יכול להיות שמישהו בבית ניתק את האינטרנט או קפץ האינטרנט לשנייה).

זוהי בעצם שגיאת TCP/IP רחבה ונפוצה מאוד. \
זה אומר שקרה משהו כדי לנתק את הקשר בצורה פתאומית ובלתי צפויה.

שרתים מחזירים את זה לפעמים בתהליך של כיבוי או הפעלה, מה שעלול לקרות אם השרת מבצע גיבויים/אתחולים ליליים. \
(אנחנו עושים גיבוי כל יום, בשעה שעון ישראל 00:00 GMT+2)
