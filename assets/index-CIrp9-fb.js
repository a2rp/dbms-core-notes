import{c,r as o,j as e,F as r,d,e as t,a as i,f as p,g as x,b as h}from"./index-Mc0Xt7Eb.js";const m={Wrapper:c.section`
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

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
        }

        .list b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .ex {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 10px;
        }

        .exTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 6px;
        }

        .exList {
            display: grid;
            gap: 6px;
        }

        .exList li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.45;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 180px 1fr;
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

        .compare {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            margin-top: 10px;
        }

        .row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .row.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .row.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .row div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
        }

        .schema {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            margin-top: 10px;
        }

        .sRow {
            display: grid;
            grid-template-columns: 1fr 1.2fr 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .sRow:first-child {
            border-top: 0;
        }

        .sRow.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .sRow.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .sRow div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
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

            .row {
                grid-template-columns: 1fr;
            }

            .sRow {
                grid-template-columns: 1fr;
            }
        }
    `},v=()=>{const[s,n]=o.useState(!0),a=o.useMemo(()=>({id:"databaseFundamentals",title:"Database Fundamentals",sub:"Data, database, DBMS, why we use it, file system vs DBMS, data independence, and 3 schema architecture."}),[]);return e.jsxs(m.Wrapper,{id:a.id,children:[e.jsxs("button",{type:"button",className:`head ${s?"open":""}`,onClick:()=>n(l=>!l),"aria-expanded":s,"aria-controls":`${a.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(r,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:a.title}),e.jsx("span",{className:"badge",children:"Basics"})]}),e.jsx("p",{className:"sub",children:a.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(d,{})})]}),e.jsx("div",{id:`${a.id}-content`,className:`content ${s?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(t,{})}),e.jsx("h3",{className:"h3",children:"What is data"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Data"})," is raw facts and values that can be stored and processed. It can be numbers, text, dates, images, clicks, sensor readings, or any measurable information."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Examples"}),e.jsxs("ul",{className:"exList",children:[e.jsx("li",{children:'"Ashish"'}),e.jsx("li",{children:"98"}),e.jsx("li",{children:'"2026-03-01"'}),e.jsx("li",{children:'"Order placed"'})]})]}),e.jsx("p",{className:"note",children:"Data becomes useful when it is organized and connected to meaning, then it becomes information."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(i,{})}),e.jsx("h3",{className:"h3",children:"What is database"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"database"})," is an organized collection of related data stored so it can be searched, updated, and managed efficiently."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Examples"}),e.jsxs("ul",{className:"exList",children:[e.jsx("li",{children:"Student records for a school"}),e.jsx("li",{children:"Orders and customers for an eCommerce app"}),e.jsx("li",{children:"Transactions for a banking system"})]})]}),e.jsx("p",{className:"note",children:"A database is the data. DBMS is the software that manages it."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(r,{})}),e.jsx("h3",{className:"h3",children:"DBMS full form"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"DBMS"})," stands for"," ",e.jsx("b",{children:"Database Management System"}),". It is software that helps you create, store, retrieve, update, and secure data in a database."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Store"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Query"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Update"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Secure"})]}),e.jsx("p",{className:"note",children:"Popular DBMS examples: MySQL, PostgreSQL, Oracle, SQL Server."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"Why DBMS is needed"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Store large data reliably and access it fast"}),e.jsx("li",{children:"Handle multiple users at the same time safely"}),e.jsx("li",{children:"Reduce duplication and keep data consistent"}),e.jsx("li",{children:"Provide security and access control"}),e.jsx("li",{children:"Provide backup and recovery"})]}),e.jsx("p",{className:"note",children:"Without a DBMS, apps become fragile when data grows and multiple users start writing together."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"File system vs DBMS"})]}),e.jsxs("div",{className:"compare",children:[e.jsxs("div",{className:"row head",children:[e.jsx("div",{children:"File system"}),e.jsx("div",{children:"DBMS"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Data stored in separate files like CSV, text, or custom formats"}),e.jsx("div",{children:"Data stored with structure like tables, relationships, indexes"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Searching and updates become manual or slow when data grows"}),e.jsx("div",{children:"SQL and query engine makes searching and updates efficient"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Concurrency is hard, risk of overwriting changes"}),e.jsx("div",{children:"Transactions and locking handle concurrent users safely"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Weak security model, hard to control access properly"}),e.jsx("div",{children:"Roles and permissions control who can read or write"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Backup and recovery is manual and error-prone"}),e.jsx("div",{children:"Built-in logging, recovery, and backup strategies"})]})]}),e.jsx("p",{className:"note",children:"File system works for small simple apps. DBMS is needed for real multi-user applications."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(h,{})}),e.jsx("h3",{className:"h3",children:"Advantages of DBMS"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Reduced redundancy using good design"}),e.jsx("li",{children:"Improved consistency using constraints"}),e.jsx("li",{children:"Security using authentication and authorization"}),e.jsx("li",{children:"Concurrency support using transactions"}),e.jsx("li",{children:"Backup and recovery support"}),e.jsx("li",{children:"Better data sharing across applications"})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(i,{})}),e.jsx("h3",{className:"h3",children:"Data independence"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Data independence"})," means changing the database structure at one level without breaking the level above it. This is a big reason DBMS is preferred."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Physical data independence"}),e.jsxs("div",{className:"v",children:["Change storage details without changing logical structure.",e.jsx("span",{className:"small",children:"Example: move data from HDD to SSD, change indexing method, file layout changes."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Logical data independence"}),e.jsxs("div",{className:"v",children:["Change logical design without changing user views.",e.jsx("span",{className:"small",children:"Example: split one table into two tables, add new attributes, create a view to keep old output."})]})]})]}),e.jsx("p",{className:"note",children:"Logical data independence is harder to achieve than physical."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(i,{})}),e.jsx("h3",{className:"h3",children:"Three schema architecture"})]}),e.jsx("p",{className:"p",children:"Three schema architecture separates how data is stored, how it is logically designed, and how users see it. This supports data independence."}),e.jsxs("div",{className:"schema",children:[e.jsxs("div",{className:"sRow head",children:[e.jsx("div",{className:"c1",children:"Schema"}),e.jsx("div",{className:"c2",children:"What it means"}),e.jsx("div",{className:"c3",children:"Example"})]}),e.jsxs("div",{className:"sRow",children:[e.jsx("div",{className:"c1",children:"Internal schema"}),e.jsx("div",{className:"c2",children:"Physical storage details and access paths"}),e.jsx("div",{className:"c3",children:"File layout, indexes, page structure"})]}),e.jsxs("div",{className:"sRow",children:[e.jsx("div",{className:"c1",children:"Conceptual schema"}),e.jsx("div",{className:"c2",children:"Logical structure of the entire database"}),e.jsx("div",{className:"c3",children:"Tables, relations, constraints"})]}),e.jsxs("div",{className:"sRow",children:[e.jsx("div",{className:"c1",children:"External schema"}),e.jsx("div",{className:"c2",children:"User-specific views of data"}),e.jsx("div",{className:"c3",children:'Views like "studentSummary", "billingView"'})]})]}),e.jsx("p",{className:"note",children:"Memory trick: external is what users see, conceptual is the full logical design, internal is how it is stored."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(r,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"Database is data. DBMS is the manager. Three schemas separate storage, design, and views."})]})]})]})})]})};export{v as default};
