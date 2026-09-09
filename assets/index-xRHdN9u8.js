import{c as n,r as i,j as e,a,d as t,h as d,i as c,k as p,l as x}from"./index-Mc0Xt7Eb.js";const m={Wrapper:n.section`
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

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.8px;
            color: var(--color-text-secondary);
            line-height: 1.5;
            word-break: break-word;
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

        .list {
            display: grid;
            gap: 10px;
        }

        .list li {
            color: var(--color-text-secondary);
            font-size: 13.5px;
            line-height: 1.55;
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
    `},g=()=>{const[r,o]=i.useState(!0),s=i.useMemo(()=>({id:"dataModels",title:"Data Models",sub:"Meaning of data model and the major types - hierarchical, network, relational, object-oriented, and ER model."}),[]);return e.jsxs(m.Wrapper,{id:s.id,children:[e.jsxs("button",{type:"button",className:`head ${r?"open":""}`,onClick:()=>o(l=>!l),"aria-expanded":r,"aria-controls":`${s.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(a,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:s.title}),e.jsx("span",{className:"badge",children:"Models"})]}),e.jsx("p",{className:"sub",children:s.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(t,{})})]}),e.jsx("div",{id:`${s.id}-content`,className:`content ${r?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(a,{})}),e.jsx("h3",{className:"h3",children:"Data model meaning"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"data model"})," is a structured way to describe how data is organized, related, stored, and accessed. It defines the rules for data structure and relationships so systems and humans can understand the same data design."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Structure"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Relationships"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Constraints"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Operations"})]}),e.jsx("p",{className:"note",children:"Example: In a shopping app, customers place orders. Orders contain items. A data model decides how these are represented and linked."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(a,{})}),e.jsx("h3",{className:"h3",children:"Hierarchical model"})]}),e.jsxs("p",{className:"p",children:["Data is organized like a ",e.jsx("b",{children:"tree"}),". One parent can have many children, but each child has only one parent."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Mental model"}),e.jsx("div",{className:"mono",children:"Company - Department - Employee"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Good for strict 1-to-many relationships"}),e.jsx("li",{children:"Hard when you need many-to-many relationships"})]}),e.jsx("p",{className:"note",children:'Think "folder structure" style data.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(d,{})}),e.jsx("h3",{className:"h3",children:"Network model"})]}),e.jsxs("p",{className:"p",children:["Data is organized as a ",e.jsx("b",{children:"graph"}),". A record can have multiple parents and multiple children. This supports many-to-many naturally."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Mental model"}),e.jsx("div",{className:"mono",children:"Student - EnrolledIn - Course"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Handles complex relationships well"}),e.jsx("li",{children:"More complex to design and query than relational"})]}),e.jsx("p",{className:"note",children:'Think "connected nodes" style data.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(c,{})}),e.jsx("h3",{className:"h3",children:"Relational model"})]}),e.jsxs("p",{className:"p",children:["Data is stored in ",e.jsx("b",{children:"tables"})," (relations). Rows are tuples and columns are attributes. Relationships are formed using keys."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example tables"}),e.jsxs("ul",{className:"exList",children:[e.jsx("li",{children:"customers(customerId, name)"}),e.jsx("li",{children:"orders(orderId, customerId, total)"})]})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Most popular model used in real systems"}),e.jsx("li",{children:"SQL makes queries powerful and standard"})]}),e.jsx("p",{className:"note",children:"Relationships are typically built using foreign keys."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"Object-oriented model"})]}),e.jsxs("p",{className:"p",children:["Data is stored as ",e.jsx("b",{children:"objects"})," similar to OOP. Objects contain both data and behavior. It fits naturally with languages that use classes."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsxs("div",{className:"mono",children:["class Order ","{"," items, total, place()"," ","}"]})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Useful for complex data like CAD, multimedia, simulations"}),e.jsx("li",{children:"Less common than relational in typical business apps"})]}),e.jsx("p",{className:"note",children:"Object relational mapping tries to bridge OOP and relational DBs."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"Entity-Relationship model - ER model basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"ER model"})," is a conceptual model used to design a database before writing tables. It uses",e.jsx("b",{children:"entities"}),", ",e.jsx("b",{children:"attributes"}),", and",e.jsx("b",{children:"relationships"})," to represent real-world data."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Entity"}),e.jsxs("div",{className:"v",children:["A real-world object or concept.",e.jsx("span",{className:"small",children:"Example: Student, Customer, Product"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Attribute"}),e.jsxs("div",{className:"v",children:["Properties of an entity.",e.jsx("span",{className:"small",children:"Example: Student has name, rollNo"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Relationship"}),e.jsxs("div",{className:"v",children:["How entities are connected.",e.jsx("span",{className:"small",children:"Example: Customer places Order"})]})]})]}),e.jsx("p",{className:"note",children:"ER model helps you get the logic correct first, then you convert it into tables."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(a,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"Hierarchical is tree, network is graph, relational is tables, object-oriented is objects, ER is design blueprint."})]})]})]})})]})};export{g as default};
