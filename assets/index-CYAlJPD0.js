import{c as d,r as l,j as e,i,d as c,a as o,m as x,s as p,o as a,q as m}from"./index-B13LwCCT.js";const h={Wrapper:d.section`
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
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            color: var(--color-text-primary);
            line-height: 1.6;
            white-space: pre-wrap;
            word-break: break-word;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 140px 1fr;
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

        .keysGrid {
            margin-top: 10px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 10px;
        }

        .kCard {
            grid-column: span 6;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 12px;
        }

        .kTitle {
            display: flex;
            align-items: center;
            gap: 10px;
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 6px;
            font-size: 13px;
        }

        .kIcon {
            width: 30px;
            height: 30px;
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

        .kIcon svg {
            width: 16px;
            height: 16px;
        }

        .kBody {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.6;
        }

        .kEx {
            margin-top: 6px;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.3px;
            color: var(--color-text-muted);
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

            .kCard {
                grid-column: span 12;
            }
        }
    `},v=()=>{const[r,n]=l.useState(!0),s=l.useMemo(()=>({id:"relationalModel",title:"Relational Model",sub:"Relation, tuple, attribute, domain, degree, cardinality, and the full key family used in RDBMS."}),[]);return e.jsxs(h.Wrapper,{id:s.id,children:[e.jsxs("button",{type:"button",className:`head ${r?"open":""}`,onClick:()=>n(t=>!t),"aria-expanded":r,"aria-controls":`${s.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(i,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:s.title}),e.jsx("span",{className:"badge",children:"Tables and Keys"})]}),e.jsx("p",{className:"sub",children:s.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(c,{})})]}),e.jsx("div",{id:`${s.id}-content`,className:`content ${r?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(i,{})}),e.jsx("h3",{className:"h3",children:"Relation"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"relation"})," is a table in the relational model. It stores data as rows and columns."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("div",{className:"code",children:"STUDENT(studentId, name, email)"})]}),e.jsx("p",{className:"note",children:"Relation name is like the table name, and attributes are the column names."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"Tuple"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"tuple"})," is a single row in a relation. It represents one record."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example row"}),e.jsx("div",{className:"code",children:'(101, "Ashish", "ash@example.com")'})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"Attribute"})]}),e.jsxs("p",{className:"p",children:["An ",e.jsx("b",{children:"attribute"})," is a column in a table. It describes a property of the entity."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"studentId"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"name"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"email"})]}),e.jsx("p",{className:"note",children:"Attribute values come from a defined domain."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"Domain"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"domain"})," is the allowed set of values for an attribute. It defines type and constraints."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsxs("div",{className:"v",children:["age domain could be 0 to 120",e.jsx("span",{className:"small",children:"integer values only"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Example"}),e.jsxs("div",{className:"v",children:["email domain could be valid email strings",e.jsx("span",{className:"small",children:'must contain "@"'})]})]})]}),e.jsx("p",{className:"note",children:"Domain helps ensure data correctness at the attribute level."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(i,{})}),e.jsx("h3",{className:"h3",children:"Degree"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Degree"})," is the number of attributes (columns) in a relation."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("div",{className:"code",children:"STUDENT(studentId, name, email) - degree is 3"})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"Cardinality"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Cardinality"})," is the number of tuples (rows) in a relation."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("div",{className:"code",children:"STUDENT has 500 rows - cardinality is 500"})]}),e.jsx("p",{className:"note",children:"Do not confuse this with ER diagram cardinality like 1:N. Here it means row count."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(a,{})}),e.jsx("h3",{className:"h3",children:"Keys in DBMS"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"key"})," is a set of attributes that identifies a tuple uniquely or helps connect tables correctly. Different keys serve different purposes."]}),e.jsxs("div",{className:"keysGrid",children:[e.jsxs("div",{className:"kCard",children:[e.jsxs("div",{className:"kTitle",children:[e.jsx("span",{className:"kIcon",children:e.jsx(a,{})}),"Super key"]}),e.jsxs("div",{className:"kBody",children:["Any attribute set that uniquely identifies a row. It can include extra attributes.",e.jsx("div",{className:"kEx",children:"Example: (studentId) or (studentId, email)"})]})]}),e.jsxs("div",{className:"kCard",children:[e.jsxs("div",{className:"kTitle",children:[e.jsx("span",{className:"kIcon",children:e.jsx(a,{})}),"Candidate key"]}),e.jsxs("div",{className:"kBody",children:["Minimal super key. No extra attributes. There can be multiple candidate keys.",e.jsx("div",{className:"kEx",children:"Example: (studentId) and (email) if both are unique"})]})]}),e.jsxs("div",{className:"kCard",children:[e.jsxs("div",{className:"kTitle",children:[e.jsx("span",{className:"kIcon",children:e.jsx(a,{})}),"Primary key"]}),e.jsxs("div",{className:"kBody",children:["One selected candidate key used as main identifier. It cannot be NULL and should be stable.",e.jsx("div",{className:"kEx",children:"Example: studentId"})]})]}),e.jsxs("div",{className:"kCard",children:[e.jsxs("div",{className:"kTitle",children:[e.jsx("span",{className:"kIcon",children:e.jsx(a,{})}),"Alternate key"]}),e.jsxs("div",{className:"kBody",children:["Candidate keys not chosen as primary key. Still unique.",e.jsx("div",{className:"kEx",children:"Example: email"})]})]}),e.jsxs("div",{className:"kCard",children:[e.jsxs("div",{className:"kTitle",children:[e.jsx("span",{className:"kIcon",children:e.jsx(m,{})}),"Foreign key"]}),e.jsxs("div",{className:"kBody",children:["Attribute in one table that references primary key of another table. It builds relationships.",e.jsx("div",{className:"kEx",children:"Example: ENROLLMENT.studentId references STUDENT.studentId"})]})]}),e.jsxs("div",{className:"kCard",children:[e.jsxs("div",{className:"kTitle",children:[e.jsx("span",{className:"kIcon",children:e.jsx(o,{})}),"Composite key"]}),e.jsxs("div",{className:"kBody",children:["Key made of 2 or more attributes. Used when one attribute is not enough.",e.jsx("div",{className:"kEx",children:"Example: (studentId, courseId) in ENROLLMENT"})]})]})]}),e.jsx("p",{className:"note",children:"Memory: super key identifies, candidate key is minimal, primary key is chosen, alternate key is remaining, foreign key links, composite key is multi-column."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(a,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"Degree is columns, cardinality is rows. Candidate keys are minimal unique sets, and one becomes primary key."})]})]})]})})]})};export{v as default};
