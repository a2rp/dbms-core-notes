import{c,r as i,j as e,F as a,d as t,Q as d,a as o,R as p,g as x,i as h,h as m}from"./index-B13LwCCT.js";const g={Wrapper:c.section`
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

        .pre {
            margin: 0;
            white-space: pre-wrap;
            word-break: break-word;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            font-size: 12.5px;
            line-height: 1.55;
            color: var(--color-text-secondary);
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

            .row {
                grid-template-columns: 1fr;
            }
        }
    `},v=()=>{const[r,n]=i.useState(!0),s=i.useMemo(()=>({id:"nosqlBasics",title:"NoSQL Basics",sub:"What NoSQL is, main types, SQL vs NoSQL, and when to choose NoSQL for real systems."}),[]);return e.jsxs(g.Wrapper,{id:s.id,children:[e.jsxs("button",{type:"button",className:`head ${r?"open":""}`,onClick:()=>n(l=>!l),"aria-expanded":r,"aria-controls":`${s.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(a,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:s.title}),e.jsx("span",{className:"badge",children:"NoSQL"})]}),e.jsx("p",{className:"sub",children:s.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(t,{})})]}),e.jsx("div",{id:`${s.id}-content`,className:`content ${r?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(d,{})}),e.jsx("h3",{className:"h3",children:"What is NoSQL"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"NoSQL"})," means ",e.jsx("b",{children:"Not Only SQL"}),". It is a category of databases designed for flexibility, high scale, and fast performance for certain workloads. NoSQL systems often store data in formats other than rows and tables."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Flexible schema - fields can vary between records"}),e.jsx("li",{children:"Scales horizontally - add more machines to handle load"}),e.jsx("li",{children:"Optimized for specific access patterns"})]}),e.jsx("p",{className:"note",children:'NoSQL is not "no structure". It is structure that fits the use case.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"Types"})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Key-value"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Document"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Column family"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Graph"})]}),e.jsx("p",{className:"p",children:"Each type is built around a different way of storing and querying data. Pick based on how your app reads and writes data."}),e.jsx("p",{className:"note",children:"Most real systems use a mix of SQL and NoSQL."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"Key-value"})]}),e.jsxs("p",{className:"p",children:["Stores data as ",e.jsx("b",{children:"key - value"})," pairs. You give a key, it returns a value. Very fast for simple lookups."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example shape"}),e.jsx("pre",{className:"pre",children:`"user:42" -> "{ name: 'Ash', plan: 'pro' }"`})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Best for caching, sessions, counters, feature flags"}),e.jsx("li",{children:"Weak for complex joins or ad-hoc analytics"})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"Document"})]}),e.jsxs("p",{className:"p",children:["Stores records as ",e.jsx("b",{children:"documents"}),", commonly JSON-like. Each document can have nested objects and arrays."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example document"}),e.jsx("pre",{className:"pre",children:`{
  "_id": "order_1001",
  "userId": "u42",
  "items": [
    { "sku": "p10", "qty": 2 },
    { "sku": "p21", "qty": 1 }
  ],
  "total": 1299
}`})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Great for user profiles, product catalogs, logs, content apps"}),e.jsx("li",{children:"Joins are limited, denormalization is common"})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(h,{})}),e.jsx("h3",{className:"h3",children:"Column family"})]}),e.jsxs("p",{className:"p",children:["Stores data in ",e.jsx("b",{children:"column families"})," ","(wide-column). It is optimized for large-scale reads and writes across many nodes. Rows can have many columns and columns can vary."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Good for time-series, telemetry, large event data"}),e.jsx("li",{children:"Designed for high throughput and scale"}),e.jsx("li",{children:"Query patterns must be planned in advance"})]}),e.jsx("p",{className:"note",children:"Think of it like a giant sparse table tuned for scale."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(m,{})}),e.jsx("h3",{className:"h3",children:"Graph"})]}),e.jsxs("p",{className:"p",children:["Stores data as ",e.jsx("b",{children:"nodes"})," and ",e.jsx("b",{children:"edges"}),". The focus is on relationships and traversals."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example idea"}),e.jsx("pre",{className:"pre",children:`(Ash) -[FRIEND]-> (Neha)
(Ash) -[LIKES]-> (Robotics)
(Robotics) -[RELATED]-> (AI)`})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Best for social networks, recommendations, fraud detection"}),e.jsx("li",{children:"Strong for relationship-heavy queries"})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"SQL vs NoSQL comparison"})]}),e.jsxs("div",{className:"compare",children:[e.jsxs("div",{className:"row head",children:[e.jsx("div",{children:"SQL (Relational)"}),e.jsx("div",{children:"NoSQL"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Fixed schema, tables and rows"}),e.jsx("div",{children:"Flexible schema, multiple data models"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Strong joins and complex queries"}),e.jsx("div",{children:"Optimized for specific access patterns"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"ACID transactions are common"}),e.jsx("div",{children:"Consistency model can vary, often eventual consistency"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Vertical scaling is common (bigger machine)"}),e.jsx("div",{children:"Horizontal scaling is common (more machines)"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Great for financial, inventory, strong integrity apps"}),e.jsx("div",{children:"Great for logs, content, high traffic, flexible data apps"})]})]}),e.jsx("p",{className:"note",children:"Rule of thumb: if relationships and correctness are core, SQL wins. If scale and flexible structure are core, NoSQL helps."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(a,{})}),e.jsx("h3",{className:"h3",children:"When to use NoSQL"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"When schema changes frequently and you want flexibility"}),e.jsx("li",{children:"When you need massive scale and horizontal scaling is the plan"}),e.jsx("li",{children:"When data is unstructured or semi-structured (logs, events, content)"}),e.jsx("li",{children:"When you need very fast key-based reads (cache, sessions)"}),e.jsx("li",{children:"When relationships are best represented as graphs (recommendations)"}),e.jsx("li",{children:"When your queries are predictable and designed around the storage model"})]}),e.jsx("p",{className:"note",children:"In many products: SQL for core data, NoSQL for logs, cache, search, and high-scale side workloads."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(a,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"NoSQL is about choosing the right data model - key-value for speed, document for flexible JSON, column family for scale, graph for relationships."})]})]})]})})]})};export{v as default};
