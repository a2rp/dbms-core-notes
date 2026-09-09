import{c as n,r as i,j as s,t as r,d as c,u as t,v as d,w as p,x,b as m}from"./index-B13LwCCT.js";const h={Wrapper:n.section`
        width: 100%;
        margin-bottom: 10px;

        .head {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;

            padding: 14px 14px;
            border-radius: 16px;

            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            box-shadow: 0 16px 34px var(--color-shadow);

            text-align: left;
            position: relative;
            overflow: hidden;
        }

        .head::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 2px;
            background: linear-gradient(
                90deg,
                transparent,
                color-mix(in srgb, var(--color-primary) 90%, transparent),
                color-mix(in srgb, var(--color-accent) 75%, transparent),
                transparent
            );
            opacity: 0.95;
        }

        /* subtle table grid texture */
        .head::after {
            content: "";
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image:
                linear-gradient(
                    to right,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                ),
                linear-gradient(
                    to bottom,
                    color-mix(in srgb, var(--color-border) 42%, transparent) 1px,
                    transparent 1px
                );
            background-size: 26px 26px;
            opacity: 0.12;
            mask-image: linear-gradient(
                180deg,
                rgba(0, 0, 0, 0.9),
                rgba(0, 0, 0, 0)
            );
        }

        .left {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .icon {
            width: 40px;
            height: 40px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
            flex: 0 0 auto;
        }

        .icon svg {
            width: 20px;
            height: 20px;
        }

        .text {
            min-width: 0;
            position: relative;
            z-index: 1;
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 10px;
            flex-wrap: wrap;
        }

        .title {
            font-size: 16px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .badge {
            font-size: 12px;
            font-weight: 800;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .sub {
            margin-top: 4px;
            font-size: 13px;
            line-height: 1.55;
            color: var(--color-text-secondary);
            max-width: 860px;

            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
        }

        .chev {
            width: 38px;
            height: 38px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-text-primary);
            flex: 0 0 auto;

            transition: transform 180ms ease;
            position: relative;
            z-index: 1;
        }

        .head.open .chev {
            transform: rotate(180deg);
        }

        .head:hover {
            border-color: var(--color-border-light);
        }

        .head:active {
            transform: translateY(1px);
        }

        .head:focus-visible {
            outline: 2px solid var(--color-primary);
            outline-offset: 3px;
            box-shadow:
                0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 18%, transparent),
                0 16px 34px var(--color-shadow);
        }

        .content {
            display: grid;
            grid-template-rows: 0fr;
            transition: grid-template-rows 220ms ease;
        }

        .content.show {
            grid-template-rows: 1fr;
        }

        .content > * {
            overflow: hidden;
        }

        .inner {
            padding-top: 12px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 6;
            padding: 14px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card.span12 {
            grid-column: span 12;
        }

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 84%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .cIcon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 14px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .p {
            font-size: 13.5px;
            line-height: 1.65;
            color: var(--color-text-secondary);
            margin-bottom: 10px;
        }

        .note {
            font-size: 12.5px;
            line-height: 1.6;
            color: var(--color-text-muted);
            margin-top: 6px;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin: 10px 0 6px;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 82%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 800;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 110px 1fr;
            gap: 10px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
        }

        .v {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .bottomNote {
            margin-top: 12px;
            padding: 12px 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            display: flex;
            gap: 10px;
            align-items: flex-start;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .bnIcon {
            width: 34px;
            height: 34px;
            border-radius: 12px;
            display: grid;
            place-items: center;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-primary);
            flex: 0 0 auto;
        }

        .bnIcon svg {
            width: 18px;
            height: 18px;
        }

        .bnTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .bnSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},g=()=>{const[a,l]=i.useState(!0),e=i.useMemo(()=>({id:"sqlBasics",title:"SQL Basics",sub:"SQL meaning and the 5 command groups - DDL, DML, DQL, TCL, DCL, with common commands and examples."}),[]);return s.jsxs(h.Wrapper,{id:e.id,children:[s.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>l(o=>!o),"aria-expanded":a,"aria-controls":`${e.id}-content`,children:[s.jsxs("div",{className:"left",children:[s.jsx("span",{className:"icon",children:s.jsx(r,{})}),s.jsxs("div",{className:"text",children:[s.jsxs("div",{className:"titleRow",children:[s.jsx("h2",{className:"title",children:e.title}),s.jsx("span",{className:"badge",children:"SQL"})]}),s.jsx("p",{className:"sub",children:e.sub})]})]}),s.jsx("span",{className:"chev",children:s.jsx(c,{})})]}),s.jsx("div",{id:`${e.id}-content`,className:`content ${a?"show":""}`,children:s.jsxs("div",{className:"inner",children:[s.jsxs("div",{className:"grid",children:[s.jsxs("div",{className:"card span12",children:[s.jsxs("div",{className:"cardTop",children:[s.jsx("span",{className:"cIcon",children:s.jsx(r,{})}),s.jsx("h3",{className:"h3",children:"What is SQL - Structured Query Language"})]}),s.jsxs("p",{className:"p",children:[s.jsx("b",{children:"SQL"})," means"," ",s.jsx("b",{children:"Structured Query Language"}),". It is the standard language used to talk to relational databases. With SQL, you can define tables, insert and update rows, query data, and control access."]}),s.jsxs("div",{className:"mini",children:[s.jsx("span",{className:"pill",children:"Define"}),s.jsx("span",{className:"dash",children:"-"}),s.jsx("span",{className:"pill",children:"Insert"}),s.jsx("span",{className:"dash",children:"-"}),s.jsx("span",{className:"pill",children:"Query"}),s.jsx("span",{className:"dash",children:"-"}),s.jsx("span",{className:"pill",children:"Control"}),s.jsx("span",{className:"dash",children:"-"}),s.jsx("span",{className:"pill",children:"Commit"})]}),s.jsx("p",{className:"note",children:"SQL is declarative. You tell what you want, the database figures out how to do it."})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardTop",children:[s.jsx("span",{className:"cIcon",children:s.jsx(t,{})}),s.jsx("h3",{className:"h3",children:"DDL - Data Definition Language"})]}),s.jsx("p",{className:"p",children:"DDL is used to create and modify database structure like tables and columns."}),s.jsxs("div",{className:"kvs",children:[s.jsxs("div",{className:"kv",children:[s.jsx("div",{className:"k",children:"CREATE"}),s.jsxs("div",{className:"v",children:["Creates objects like tables, indexes, views.",s.jsx("span",{className:"small",children:"Example: create table users (...)"})]})]}),s.jsxs("div",{className:"kv",children:[s.jsx("div",{className:"k",children:"ALTER"}),s.jsxs("div",{className:"v",children:["Modifies structure of existing objects.",s.jsx("span",{className:"small",children:"Example: add a column, change datatype"})]})]}),s.jsxs("div",{className:"kv",children:[s.jsx("div",{className:"k",children:"DROP"}),s.jsxs("div",{className:"v",children:["Deletes objects permanently.",s.jsx("span",{className:"small",children:"Example: drop table users"})]})]})]}),s.jsx("p",{className:"note",children:"DDL changes schema. Many DBs auto-commit DDL."})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardTop",children:[s.jsx("span",{className:"cIcon",children:s.jsx(d,{})}),s.jsx("h3",{className:"h3",children:"DML - Data Manipulation Language"})]}),s.jsx("p",{className:"p",children:"DML is used to change actual data inside tables. It works on rows."}),s.jsxs("div",{className:"kvs",children:[s.jsxs("div",{className:"kv",children:[s.jsx("div",{className:"k",children:"INSERT"}),s.jsxs("div",{className:"v",children:["Adds new rows to a table.",s.jsx("span",{className:"small",children:"Example: insert into users values (...)"})]})]}),s.jsxs("div",{className:"kv",children:[s.jsx("div",{className:"k",children:"UPDATE"}),s.jsxs("div",{className:"v",children:["Modifies existing rows.",s.jsx("span",{className:"small",children:"Example: update users set name='A' where id=1"})]})]}),s.jsxs("div",{className:"kv",children:[s.jsx("div",{className:"k",children:"DELETE"}),s.jsxs("div",{className:"v",children:["Removes rows from a table.",s.jsx("span",{className:"small",children:"Example: delete from users where id=1"})]})]})]}),s.jsx("p",{className:"note",children:"DML is usually controlled by transactions. You can rollback if not committed."})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardTop",children:[s.jsx("span",{className:"cIcon",children:s.jsx(p,{})}),s.jsx("h3",{className:"h3",children:"DQL - Data Query Language"})]}),s.jsx("p",{className:"p",children:"DQL is used to read data from tables. The core command is SELECT."}),s.jsx("div",{className:"kvs",children:s.jsxs("div",{className:"kv",children:[s.jsx("div",{className:"k",children:"SELECT"}),s.jsxs("div",{className:"v",children:["Fetches rows and columns from one or more tables.",s.jsx("span",{className:"small",children:"Example: select name from users where city='Bhopal'"})]})]})}),s.jsx("p",{className:"note",children:"Best habit: always start with a WHERE clause in mind to avoid full table scans."})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardTop",children:[s.jsx("span",{className:"cIcon",children:s.jsx(x,{})}),s.jsx("h3",{className:"h3",children:"TCL - Transaction Control Language"})]}),s.jsx("p",{className:"p",children:"TCL manages transactions. It decides when your changes become permanent or when to undo them."}),s.jsxs("div",{className:"kvs",children:[s.jsxs("div",{className:"kv",children:[s.jsx("div",{className:"k",children:"COMMIT"}),s.jsx("div",{className:"v",children:"Makes changes permanent in the database."})]}),s.jsxs("div",{className:"kv",children:[s.jsx("div",{className:"k",children:"ROLLBACK"}),s.jsx("div",{className:"v",children:"Undoes changes since last commit or savepoint."})]}),s.jsxs("div",{className:"kv",children:[s.jsx("div",{className:"k",children:"SAVEPOINT"}),s.jsx("div",{className:"v",children:"Creates a named point inside a transaction to rollback partially."})]})]}),s.jsx("p",{className:"note",children:"Think of SAVEPOINT like a checkpoint inside one transaction."})]}),s.jsxs("div",{className:"card",children:[s.jsxs("div",{className:"cardTop",children:[s.jsx("span",{className:"cIcon",children:s.jsx(m,{})}),s.jsx("h3",{className:"h3",children:"DCL - Data Control Language"})]}),s.jsx("p",{className:"p",children:"DCL controls permissions. It decides who can read, write, or manage database objects."}),s.jsxs("div",{className:"kvs",children:[s.jsxs("div",{className:"kv",children:[s.jsx("div",{className:"k",children:"GRANT"}),s.jsxs("div",{className:"v",children:["Gives permissions to a user or role.",s.jsx("span",{className:"small",children:"Example: grant select on users to analystRole"})]})]}),s.jsxs("div",{className:"kv",children:[s.jsx("div",{className:"k",children:"REVOKE"}),s.jsxs("div",{className:"v",children:["Removes previously granted permissions.",s.jsx("span",{className:"small",children:"Example: revoke insert on users from tempUser"})]})]})]}),s.jsx("p",{className:"note",children:"DCL is critical in production to prevent accidental data damage."})]})]}),s.jsxs("div",{className:"bottomNote",children:[s.jsx("div",{className:"bnIcon",children:s.jsx(r,{})}),s.jsxs("div",{className:"bnText",children:[s.jsx("div",{className:"bnTitle",children:"Quick memory"}),s.jsx("div",{className:"bnSub",children:"DDL defines structure, DML changes rows, DQL reads, TCL controls commit and rollback, DCL controls permissions."})]})]})]})})]})};export{g as default};
