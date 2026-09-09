import{c as d,r as i,j as e,a as s,d as t,i as c,D as o,E as p,G as x}from"./index-D5IfMMY7.js";const m={Wrapper:d.section`
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

        .monoBox {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .tri {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .triCard {
            grid-column: span 4;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .triTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            margin-bottom: 6px;
            font-size: 13px;
        }

        .triText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .small {
            display: block;
            margin-top: 4px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 160px 1fr;
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

        .nfGrid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .nfCard {
            grid-column: span 6;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .nfTop {
            display: flex;
            align-items: flex-start;
            justify-content: space-between;
            gap: 10px;
            margin-bottom: 8px;
            flex-wrap: wrap;
        }

        .nfTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            line-height: 1.35;
        }

        .nfTag {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-primary);
            padding: 4px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 82%,
                transparent
            );
        }

        .exSmall {
            margin-top: 8px;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 82%,
                transparent
            );
            color: var(--color-text-muted);
            font-size: 12.5px;
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

            .triCard {
                grid-column: span 12;
            }

            .nfCard {
                grid-column: span 12;
            }
        }
    `},v=()=>{const[a,n]=i.useState(!0),r=i.useMemo(()=>({id:"normalization",title:"Normalization",sub:"Redundancy, anomalies, functional dependency, 1NF to BCNF, and when denormalization makes sense."}),[]);return e.jsxs(m.Wrapper,{id:r.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>n(l=>!l),"aria-expanded":a,"aria-controls":`${r.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(s,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:r.title}),e.jsx("span",{className:"badge",children:"Design"})]}),e.jsx("p",{className:"sub",children:r.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(t,{})})]}),e.jsx("div",{id:`${r.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(c,{})}),e.jsx("h3",{className:"h3",children:"Normalization"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Normalization"})," is a database design process that organizes tables to reduce duplication and avoid update bugs. It uses rules called ",e.jsx("b",{children:"normal forms"}),"."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Less redundancy"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"More consistency"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Cleaner schema"})]}),e.jsx("p",{className:"note",children:"Normalization helps data correctness. Performance can be handled later using indexes and careful queries."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"Redundancy"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Redundancy"})," means storing the same information multiple times in different rows. This increases storage and creates mismatch risk."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("div",{className:"monoBox",children:"In an Orders table, repeating customerAddress in every order row."})]}),e.jsx("p",{className:"note",children:"Redundancy is not always evil, but uncontrolled redundancy causes anomalies."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"Anomalies"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Anomalies"})," are update problems caused by redundancy. These are common in poorly designed tables."]}),e.jsxs("div",{className:"tri",children:[e.jsxs("div",{className:"triCard",children:[e.jsx("div",{className:"triTitle",children:"Insertion anomaly"}),e.jsxs("div",{className:"triText",children:["You cannot add a fact because another fact is missing.",e.jsx("span",{className:"small",children:"Example: cannot add a new customer until they place an order."})]})]}),e.jsxs("div",{className:"triCard",children:[e.jsx("div",{className:"triTitle",children:"Update anomaly"}),e.jsxs("div",{className:"triText",children:["Same value exists in multiple rows, you must update all or data becomes inconsistent.",e.jsx("span",{className:"small",children:"Example: customer phone stored in many rows, one row updated but others not."})]})]}),e.jsxs("div",{className:"triCard",children:[e.jsx("div",{className:"triTitle",children:"Deletion anomaly"}),e.jsxs("div",{className:"triText",children:["Deleting one row removes more information than intended.",e.jsx("span",{className:"small",children:"Example: delete last order of a customer and you lose customer details too."})]})]})]}),e.jsx("p",{className:"note",children:"Normal forms exist mainly to prevent these anomalies."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"Functional dependency"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Functional dependency (FD)"})," is written as"," ",e.jsx("b",{children:"X -> Y"}),". It means if you know X, you can uniquely determine Y."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Meaning"}),e.jsx("div",{className:"v",children:"For any two rows, if X values match, Y values must also match."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsxs("div",{className:"v",children:["studentId -> studentName",e.jsx("span",{className:"small",children:"If studentId is same, name should be same."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why important"}),e.jsx("div",{className:"v",children:"Normalization rules are based on identifying FDs."})]})]}),e.jsx("p",{className:"note",children:"Key idea: a key determines all non-key attributes."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(s,{})}),e.jsx("h3",{className:"h3",children:"1NF to BCNF"})]}),e.jsxs("div",{className:"nfGrid",children:[e.jsxs("div",{className:"nfCard",children:[e.jsxs("div",{className:"nfTop",children:[e.jsx("div",{className:"nfTitle",children:"1NF - First Normal Form"}),e.jsx("div",{className:"nfTag",children:"Atomic values"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"No repeating groups"}),e.jsx("li",{children:"Each column holds single value"}),e.jsx("li",{children:"Rows are unique"})]}),e.jsx("div",{className:"exSmall",children:'Example: phoneNumbers should not be "999,888,777" in one cell. Make separate rows or a new table.'})]}),e.jsxs("div",{className:"nfCard",children:[e.jsxs("div",{className:"nfTop",children:[e.jsx("div",{className:"nfTitle",children:"2NF - Second Normal Form"}),e.jsx("div",{className:"nfTag",children:"No partial dependency"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Must be in 1NF"}),e.jsx("li",{children:"Every non-key attribute depends on full primary key"})]}),e.jsx("div",{className:"exSmall",children:"Example: If primary key is (studentId, courseId), then studentName should not depend only on studentId."})]}),e.jsxs("div",{className:"nfCard",children:[e.jsxs("div",{className:"nfTop",children:[e.jsx("div",{className:"nfTitle",children:"3NF - Third Normal Form"}),e.jsx("div",{className:"nfTag",children:"No transitive dependency"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Must be in 2NF"}),e.jsx("li",{children:"Non-key attributes should not depend on other non-key attributes"})]}),e.jsx("div",{className:"exSmall",children:"Example: employeeId -> deptId and deptId -> deptName, then deptName should not be in employee table."})]}),e.jsxs("div",{className:"nfCard",children:[e.jsxs("div",{className:"nfTop",children:[e.jsx("div",{className:"nfTitle",children:"BCNF - Boyce Codd Normal Form"}),e.jsx("div",{className:"nfTag",children:"Stronger 3NF"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"For every FD X -> Y, X must be a super key"}),e.jsx("li",{children:"Fixes some tricky 3NF cases"})]}),e.jsx("div",{className:"exSmall",children:"Example: If instructor -> room exists, instructor must be a key, otherwise split tables."})]})]}),e.jsx("p",{className:"note",children:"Memory line: 1NF atomic, 2NF full key, 3NF no non-key chain, BCNF every determinant is a key."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"Denormalization"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Denormalization"})," means intentionally adding some redundancy to improve read performance. It is done after you understand the workload."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"When used"}),e.jsx("div",{className:"v",children:"Heavy read systems, dashboards, reporting, caching pre-joined data."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Trade-off"}),e.jsx("div",{className:"v",children:"Faster reads but harder updates and higher risk of inconsistency."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Safe approach"}),e.jsx("div",{className:"v",children:"Keep source of truth normalized, use derived tables or materialized views for speed."})]})]}),e.jsx("p",{className:"note",children:"Rule: normalize for correctness first, then denormalize only if performance demands it."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(s,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"Normalization removes redundancy to avoid anomalies. 1NF atomic, 2NF full key, 3NF no transitive, BCNF determinant is a key."})]})]})]})})]})};export{v as default};
