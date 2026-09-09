import{c as t,r as i,j as e,b as r,d as c,B as o,s as d,o as x,q as p,C as h}from"./index-B13LwCCT.js";const m={Wrapper:t.section`
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
            padding-left: 14px;
            position: relative;
        }

        .list li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-primary);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
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

        .code {
            width: 100%;
            overflow: auto;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 12px;
            padding: 10px;
            color: var(--color-text-primary);
            font-size: 12.5px;
            line-height: 1.6;
        }

        .exText {
            margin-top: 8px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        .table {
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

        .tRow {
            display: grid;
            grid-template-columns: 160px 1.2fr 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .tRow:first-child {
            border-top: 0;
        }

        .tRow.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .tRow.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .tRow div {
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

            .tRow {
                grid-template-columns: 1fr;
            }
        }
    `},b=()=>{const[a,n]=i.useState(!0),s=i.useMemo(()=>({id:"constraints",title:"Constraints",sub:"Rules that protect data quality - NOT NULL, UNIQUE, PRIMARY KEY, FOREIGN KEY, CHECK, DEFAULT."}),[]);return e.jsxs(m.Wrapper,{id:s.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>n(l=>!l),"aria-expanded":a,"aria-controls":`${s.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(r,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:s.title}),e.jsx("span",{className:"badge",children:"Data rules"})]}),e.jsx("p",{className:"sub",children:s.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(c,{})})]}),e.jsx("div",{id:`${s.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(r,{})}),e.jsx("h3",{className:"h3",children:"What is a constraint"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"constraint"})," is a rule enforced by the database to keep data valid. It prevents wrong inserts and updates, so your tables do not become messy over time."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Integrity"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Consistency"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Safety"})]}),e.jsx("p",{className:"note",children:"Constraints are checked automatically on INSERT and UPDATE."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"NOT NULL"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"NOT NULL"})," means this column must always have a value. It cannot be NULL."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("pre",{className:"code",children:"name VARCHAR(100) NOT NULL"}),e.jsx("div",{className:"exText",children:'A user must have a name. Blank string "" is allowed, but NULL is not.'})]}),e.jsx("p",{className:"note",children:'NULL means "unknown or missing", it is not the same as 0 or "".'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(d,{})}),e.jsx("h3",{className:"h3",children:"UNIQUE"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"UNIQUE"})," means all values in this column must be different. No duplicates allowed."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("pre",{className:"code",children:"email VARCHAR(255) UNIQUE"}),e.jsx("div",{className:"exText",children:"Two users cannot have the same email."})]}),e.jsx("p",{className:"note",children:'Many databases allow multiple NULLs in a UNIQUE column, because NULL is treated as "no value".'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"PRIMARY KEY"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"PRIMARY KEY"})," uniquely identifies each row. It is basically ",e.jsx("b",{children:"UNIQUE + NOT NULL"})," ","together."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("pre",{className:"code",children:"id INT PRIMARY KEY"}),e.jsx("div",{className:"exText",children:"Each row must have a unique id and it cannot be NULL."})]}),e.jsx("p",{className:"note",children:"One table has only one primary key, but it can be a composite key."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"FOREIGN KEY"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"FOREIGN KEY"})," links one table to another. It ensures the referenced value exists in the parent table. This keeps"," ",e.jsx("b",{children:"referential integrity"}),"."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("pre",{className:"code",children:"orders.user_id REFERENCES users(id)"}),e.jsx("div",{className:"exText",children:"An order must belong to a valid user. You cannot set user_id to a non-existing user."})]}),e.jsx("p",{className:"note",children:"Deleting parent rows can affect child rows, often controlled by ON DELETE rules like CASCADE or SET NULL."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(h,{})}),e.jsx("h3",{className:"h3",children:"CHECK"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"CHECK"})," enforces a condition on values. If the condition fails, the insert or update is rejected."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("pre",{className:"code",children:"age INT CHECK (age >= 0 AND age <= 120)"}),e.jsx("div",{className:"exText",children:"Age must stay in a valid range."})]}),e.jsx("p",{className:"note",children:`CHECK is great for domain rules like "price >= 0" or "status in ('pending','paid')".`})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"DEFAULT"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"DEFAULT"})," sets a value automatically when no value is provided. It avoids NULLs and makes inserts easier."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("pre",{className:"code",children:"status VARCHAR(20) DEFAULT 'active'"}),e.jsx("div",{className:"exText",children:'If status is not given, it becomes "active".'})]}),e.jsx("p",{className:"note",children:"DEFAULT is used for timestamps, boolean flags, and common initial states."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(r,{})}),e.jsx("h3",{className:"h3",children:"Quick comparison"})]}),e.jsxs("div",{className:"table",children:[e.jsxs("div",{className:"tRow head",children:[e.jsx("div",{children:"Constraint"}),e.jsx("div",{children:"What it prevents"}),e.jsx("div",{children:"Simple use case"})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("div",{children:"NOT NULL"}),e.jsx("div",{children:"Missing values"}),e.jsx("div",{children:"name, created_at"})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("div",{children:"UNIQUE"}),e.jsx("div",{children:"Duplicate values"}),e.jsx("div",{children:"email, phone"})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("div",{children:"PRIMARY KEY"}),e.jsx("div",{children:"Duplicate or NULL identity"}),e.jsx("div",{children:"id"})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("div",{children:"FOREIGN KEY"}),e.jsx("div",{children:"Invalid references"}),e.jsx("div",{children:"orders.user_id"})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("div",{children:"CHECK"}),e.jsx("div",{children:"Invalid domain values"}),e.jsx("div",{children:"price >= 0"})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("div",{children:"DEFAULT"}),e.jsx("div",{children:"Empty initial state"}),e.jsx("div",{children:"status = 'active'"})]})]}),e.jsx("p",{className:"note",children:"Interview line: constraints are the database side validation layer, they protect data even if app code has bugs."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(r,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"PRIMARY KEY identifies, FOREIGN KEY connects, UNIQUE avoids duplicates, NOT NULL avoids missing, CHECK enforces rules, DEFAULT fills missing values."})]})]})]})})]})};export{b as default};
