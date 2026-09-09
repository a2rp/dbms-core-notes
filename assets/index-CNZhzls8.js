import{c as t,r as i,j as e,w as a,d as c,F as l,J as x,a as n,E as p}from"./index-Mc0Xt7Eb.js";const h={Wrapper:t.section`
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

        .small {
            display: block;
            margin-top: 3px;
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .tree {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
            overflow: hidden;
        }

        .tRow {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .tRow:first-child {
            border-top: 0;
        }

        .tLabel {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 13px;
        }

        .tVal {
            color: var(--color-text-secondary);
            font-size: 13px;
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

            .tRow {
                grid-template-columns: 1fr;
            }
        }
    `},b=()=>{const[r,o]=i.useState(!0),s=i.useMemo(()=>({id:"indexing",title:"Indexing",sub:"What indexes are, clustered vs non-clustered, B-Tree, hash index, when to use, and trade-offs."}),[]);return e.jsxs(h.Wrapper,{id:s.id,children:[e.jsxs("button",{type:"button",className:`head ${r?"open":""}`,onClick:()=>o(d=>!d),"aria-expanded":r,"aria-controls":`${s.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(a,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:s.title}),e.jsx("span",{className:"badge",children:"Performance"})]}),e.jsx("p",{className:"sub",children:s.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(c,{})})]}),e.jsx("div",{id:`${s.id}-content`,className:`content ${r?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(l,{})}),e.jsx("h3",{className:"h3",children:"What is index"})]}),e.jsxs("p",{className:"p",children:["An ",e.jsx("b",{children:"index"})," is an extra data structure that helps the database find rows faster without scanning the entire table."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Table"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Full scan"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Slow"})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Index"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Jump to rows"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Fast"})]}),e.jsx("p",{className:"note",children:"Index is like a book index. You jump to the page instead of reading every page."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"When to use index"})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:["Columns used often in ",e.jsx("b",{children:"WHERE"})]}),e.jsxs("li",{children:["Columns used in ",e.jsx("b",{children:"JOIN"})," conditions"]}),e.jsxs("li",{children:["Columns used in ",e.jsx("b",{children:"ORDER BY"})]}),e.jsxs("li",{children:["Columns used in ",e.jsx("b",{children:"GROUP BY"})," (sometimes)"]}),e.jsx("li",{children:"Columns with high selectivity (many unique values)"})]}),e.jsx("p",{className:"note",children:"Index helps when it reduces scanned rows a lot. Index is less useful when most rows match."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(n,{})}),e.jsx("h3",{className:"h3",children:"Clustered index"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"clustered index"})," decides the physical order of rows on disk based on the indexed column. The table data is stored in the same order as the clustered key."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"How many"}),e.jsxs("div",{className:"v",children:["Usually ",e.jsx("b",{children:"one"})," per table, because rows can be stored physically in one order only."]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Best for"}),e.jsxs("div",{className:"v",children:["Range queries like",e.jsx("span",{className:"small",children:'"WHERE createdAt BETWEEN A AND B"'})]})]})]}),e.jsx("p",{className:"note",children:"Many databases make primary key clustered by default, but not always."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(n,{})}),e.jsx("h3",{className:"h3",children:"Non-clustered index"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"non-clustered index"})," is a separate structure that stores index keys and pointers to the actual table rows. Table rows are not stored in index order."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"How many"}),e.jsx("div",{className:"v",children:"Multiple can exist on the same table."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Best for"}),e.jsx("div",{className:"v",children:"Fast lookups on frequently filtered columns."})]})]}),e.jsx("p",{className:"note",children:"It is like having multiple indexes in a book for different topics."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(l,{})}),e.jsx("h3",{className:"h3",children:"B-Tree"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"B-Tree"})," is the most common index structure in relational databases. It stays balanced so searching is fast. It supports both equality and range queries efficiently."]}),e.jsxs("div",{className:"tree",children:[e.jsxs("div",{className:"tRow",children:[e.jsx("span",{className:"tLabel",children:"Good for"}),e.jsx("span",{className:"tVal",children:'"=", "<", ">", BETWEEN, ORDER BY'})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("span",{className:"tLabel",children:"Why"}),e.jsx("span",{className:"tVal",children:"Balanced tree means fewer disk reads while searching"})]}),e.jsxs("div",{className:"tRow",children:[e.jsx("span",{className:"tLabel",children:"Common use"}),e.jsx("span",{className:"tVal",children:"Primary keys, createdAt sorting, range filters"})]})]}),e.jsx("p",{className:"note",children:"In interviews, just remember this: B-Tree is default because it handles many query types well."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(a,{})}),e.jsx("h3",{className:"h3",children:"Hash index"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"hash index"})," uses a hash function to map a key to a bucket. It is very fast for equality lookups."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Great for"}),e.jsx("div",{className:"v",children:'Equality - "WHERE id = 10"'})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Bad for"}),e.jsxs("div",{className:"v",children:["Range queries and sorting",e.jsx("span",{className:"small",children:"Example: BETWEEN, ORDER BY"})]})]})]}),e.jsx("p",{className:"note",children:"Hash indexes are not always available in all engines for all table types."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"Trade-offs"})]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Faster reads"})," but ",e.jsx("b",{children:"slower writes"})," ","because index must be updated on INSERT, UPDATE, DELETE"]}),e.jsxs("li",{children:["Uses extra ",e.jsx("b",{children:"storage"})]}),e.jsx("li",{children:"Too many indexes can slow down write-heavy systems"}),e.jsx("li",{children:"Wrong indexes do nothing but still cost space and update time"}),e.jsx("li",{children:"Index maintenance can increase complexity"})]}),e.jsx("p",{className:"note",children:"Rule: index what you search and join on often. Avoid indexing everything blindly."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(a,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"B-Tree is general purpose. Hash is equality only. Index speeds reads but adds write and storage cost."})]})]})]})})]})};export{b as default};
