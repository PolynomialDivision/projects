---
question: "How can I add my event?"
---

First, you go the [admin page](/admin). The password is the same as for the plenum pad.

---

Afterwards, you click in left panel on Projects (will soon be renamed in Events). If you already created your document, you can find and edit it here.
Otherwise, click on `New Document`. 

---

![Add Event 1](screenshots/addtitleandevent.png)

1. Add some meainingful `path` like `event-karaoke.md` (it must have the ending .md).
2. Add the name of the event in the `title` field.
3. In the body you can write and insert pictures and everything text with [markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

--- 

![Add Event 2](screenshots/addheaderdata.png)

1. Now add the header data that consists of

```
---
name: "Name of event"
desc: "Description of event!"
uni: TU Berlin
dateofevent: "2020-12-20"
groups:
  - AStA TU
starttime: "10:00"
endtime: "10:00"
location: Street 2
tags:
  - template
---

```

Please only use for university:
1. TU Berlin
2. HU Berlin
3. FU Berlin
4. HTW Berlin
5. Beuth
6. Other (for events that are not hosted at university)

For date please use the syntax: `YYYY-MM-DD`.

Add your group. If u want to have a "clickable group", send us a link and we will and your hompage.
Common Groups are
1. AStA TU
2. AStA FU
3. RefRat

**Important:** Please add tag `accessible` if your event is accessible!
In German it is called "barrierefreiheit".

--- 

Click on `Create`.