import{c as t,r as i,j as e,w as a,d as l,N as c,O as d,P as p,J as x}from"./index-D5IfMMY7.js";const h={Wrapper:t.section`
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

        .steps {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .step {
            display: grid;
            grid-template-columns: 28px 1fr;
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

        .n {
            width: 26px;
            height: 26px;
            border-radius: 999px;
            display: grid;
            place-items: center;
            font-weight: 900;
            font-size: 12px;
            color: var(--color-text-primary);
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 18%,
                transparent
            );
        }

        .t {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .t b {
            color: var(--color-text-primary);
            font-weight: 900;
        }

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 120px 1fr;
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

        .warn {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 84%,
                transparent
            );
            padding: 10px;
        }

        .wTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 6px;
        }

        .wList {
            display: grid;
            gap: 6px;
        }

        .wList li {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.45;
            padding-left: 14px;
            position: relative;
        }

        .wList li::before {
            content: "";
            width: 6px;
            height: 6px;
            border-radius: 999px;
            background: var(--color-accent);
            position: absolute;
            left: 0;
            top: 8px;
            opacity: 0.9;
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
        }
    `},g=()=>{const[s,o]=i.useState(!0),r=i.useMemo(()=>({id:"queryProcessingOptimization",title:"Query Processing and Optimization",sub:"How SQL becomes an execution plan, how the optimizer chooses paths, and why indexes change performance."}),[]);return e.jsxs(h.Wrapper,{id:r.id,children:[e.jsxs("button",{type:"button",className:`head ${s?"open":""}`,onClick:()=>o(n=>!n),"aria-expanded":s,"aria-controls":`${r.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(a,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:r.title}),e.jsx("span",{className:"badge",children:"Optimizer"})]}),e.jsx("p",{className:"sub",children:r.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(l,{})})]}),e.jsx("div",{id:`${r.id}-content`,className:`content ${s?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(a,{})}),e.jsx("h3",{className:"h3",children:"Query parsing"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Query parsing"})," is the first step where the DBMS reads your SQL, checks syntax, checks that tables and columns exist, and builds an internal representation of the query."]}),e.jsxs("div",{className:"steps",children:[e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"n",children:"1"}),e.jsxs("div",{className:"t",children:[e.jsx("b",{children:"Lexing"})," - breaks SQL into tokens like SELECT, FROM, column names"]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"n",children:"2"}),e.jsxs("div",{className:"t",children:[e.jsx("b",{children:"Parsing"})," - creates a parse tree (structure of the query)"]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"n",children:"3"}),e.jsxs("div",{className:"t",children:[e.jsx("b",{children:"Validation"})," - checks schema, types, permissions"]})]})]}),e.jsx("p",{className:"note",children:'Output of parsing is not yet "how to run" it, it is "what you asked".'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(c,{})}),e.jsx("h3",{className:"h3",children:"Query plan"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"query plan"})," is the DBMS decision of how to execute the query. It is a tree of operations like scans, filters, joins, sorts, and aggregations."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Scan"}),e.jsxs("div",{className:"v",children:["Read rows from a table or index",e.jsx("span",{className:"small",children:"Table scan or index scan"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Join"}),e.jsxs("div",{className:"v",children:["Combine rows from multiple tables",e.jsx("span",{className:"small",children:"Hash join, nested loop join, merge join"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Sort"}),e.jsx("div",{className:"v",children:"Order results, often needed for ORDER BY or merge join"})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Aggregate"}),e.jsx("div",{className:"v",children:"GROUP BY calculations like COUNT, SUM"})]})]}),e.jsx("p",{className:"note",children:"Same SQL can have many possible plans. Optimizer picks one."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(d,{})}),e.jsx("h3",{className:"h3",children:"Cost-based optimization"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Cost-based optimization"})," means the DBMS estimates the cost of different plans and picks the cheapest one. Cost is not money, it means expected work like CPU, disk reads, memory, and time."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:["Uses ",e.jsx("b",{children:"statistics"})," like row counts, distinct values, distribution"]}),e.jsx("li",{children:"Estimates selectivity of filters like WHERE conditions"}),e.jsx("li",{children:"Tries join orders and join algorithms"}),e.jsx("li",{children:"Prefers plans with fewer reads and smaller intermediate results"})]}),e.jsx("p",{className:"note",children:"If stats are outdated, optimizer can choose a bad plan. This is why ANALYZE or stats refresh matters."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"Execution plan basics"})]}),e.jsxs("p",{className:"p",children:["An ",e.jsx("b",{children:"execution plan"})," is the final plan that the DBMS actually runs. Most databases let you view it using EXPLAIN or EXPLAIN ANALYZE."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"What you usually see"}),e.jsxs("ul",{className:"exList",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Node types"})," like Seq Scan, Index Scan, Hash Join"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Estimated rows"})," vs actual rows"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Costs"})," like startup cost and total cost"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Time"})," and buffers in real run (ANALYZE)"]})]})]}),e.jsx("p",{className:"note",children:"Reading plans is a skill. Always check which step produces the biggest row explosion."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"Why indexes change performance"})]}),e.jsxs("p",{className:"p",children:["An ",e.jsx("b",{children:"index"})," is like a book index. Instead of scanning every row, the DBMS can jump to matching rows faster. This can reduce disk reads massively, especially for large tables."]}),e.jsxs("div",{className:"compare",children:[e.jsxs("div",{className:"row head",children:[e.jsx("div",{children:"Without index"}),e.jsx("div",{children:"With index"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"DBMS may do a full table scan and check every row"}),e.jsx("div",{children:"DBMS can do an index scan and fetch only matching rows"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Faster only for small tables, but becomes slow as table grows"}),e.jsx("div",{children:"Big speedup when filter selects few rows out of many"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Sorting may be needed for ORDER BY"}),e.jsx("div",{children:"Index order can remove sorting in some cases"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Joins may scan many rows first"}),e.jsx("div",{children:"Index can speed up joins on keys (like foreign key joins)"})]})]}),e.jsxs("div",{className:"warn",children:[e.jsx("div",{className:"wTitle",children:"Index trade-offs"}),e.jsxs("ul",{className:"wList",children:[e.jsx("li",{children:"Indexes make reads faster but writes slower (INSERT, UPDATE, DELETE must update index too)"}),e.jsx("li",{children:"Too many indexes increase storage and maintenance cost"}),e.jsx("li",{children:"Index helps only if it matches the query pattern (columns and order matter)"})]})]}),e.jsx("p",{className:"note",children:"Simple memory: index helps when you search small part of a big table."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(a,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"SQL becomes a plan. Optimizer picks cheapest path using stats. Indexes reduce scanning but add write cost."})]})]})]})})]})};export{g as default};
