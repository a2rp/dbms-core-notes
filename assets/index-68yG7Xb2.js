import{c as t,r as i,j as e,K as a,d as c,a as p,L as x,g as o,M as l,b as h}from"./index-Mc0Xt7Eb.js";const m={Wrapper:t.section`
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

        .steps {
            margin-top: 10px;
            display: grid;
            gap: 8px;
        }

        .step {
            display: grid;
            grid-template-columns: 36px 1fr;
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
            font-weight: 900;
        }

        .t {
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

            .row {
                grid-template-columns: 1fr;
            }

            .step {
                grid-template-columns: 1fr;
            }
        }
    `},b=()=>{const[r,n]=i.useState(!0),s=i.useMemo(()=>({id:"storageAndArchitecture",title:"Storage and Architecture",sub:"Disk basics, pages and blocks, buffer pool, record storage, files, logs, and WAL."}),[]);return e.jsxs(m.Wrapper,{id:s.id,children:[e.jsxs("button",{type:"button",className:`head ${r?"open":""}`,onClick:()=>n(d=>!d),"aria-expanded":r,"aria-controls":`${s.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(a,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:s.title}),e.jsx("span",{className:"badge",children:"Engine basics"})]}),e.jsx("p",{className:"sub",children:s.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(c,{})})]}),e.jsx("div",{id:`${s.id}-content`,className:`content ${r?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(a,{})}),e.jsx("h3",{className:"h3",children:"Disk storage basics"})]}),e.jsxs("p",{className:"p",children:["Databases store data on"," ",e.jsx("b",{children:"persistent storage"}),"like SSD or HDD so it survives restarts. Disk is much slower than RAM, so databases try to do fewer disk reads and writes."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"RAM"})," - very fast, but data is lost on power off"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Disk"})," - slower, but data stays safe after restart"]}),e.jsx("li",{children:"DB engines batch writes and use caching to reduce disk access"})]}),e.jsx("p",{className:"note",children:"Simple mental model: disk is safe but slow, memory is fast but temporary."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"Pages and blocks"})]}),e.jsxs("p",{className:"p",children:["Databases do not read single rows directly from disk. They read fixed-size chunks called"," ",e.jsx("b",{children:"pages"}),". On disk, these chunks are often called ",e.jsx("b",{children:"blocks"}),"."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Page"}),e.jsxs("div",{className:"v",children:["Fixed-size unit of storage used by the DB engine.",e.jsx("span",{className:"small",children:"Example sizes: 4KB, 8KB, 16KB depending on DB"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Block"}),e.jsx("div",{className:"v",children:"Disk level term for a chunk of data. Often maps closely to a page."})]})]}),e.jsx("p",{className:"note",children:"If one row is needed, the whole page containing that row is loaded into memory."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"Buffer pool"})]}),e.jsxs("p",{className:"p",children:["The ",e.jsx("b",{children:"buffer pool"})," is a memory area where the DB keeps recently used pages. It is basically the database cache."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:["If a needed page is in buffer pool, it is a"," ",e.jsx("b",{children:"cache hit"})]}),e.jsxs("li",{children:["If not, it is a ",e.jsx("b",{children:"cache miss"})," and DB reads from disk"]}),e.jsx("li",{children:"When buffer pool is full, DB evicts old pages using a policy like LRU style"})]}),e.jsx("p",{className:"note",children:"Bigger buffer pool usually means fewer disk reads and faster queries."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"Record storage"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"record"})," is a stored row of a table. Inside a page, records are stored with metadata so the DB can find them quickly."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Rows may have fixed-length and variable-length fields"}),e.jsx("li",{children:"Pages often maintain a slot directory to locate records"}),e.jsx("li",{children:"Updates can create fragmentation, DB may reorganize pages"})]}),e.jsx("p",{className:"note",children:"You do not need page internals for interviews, just know records live inside pages."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(l,{})}),e.jsx("h3",{className:"h3",children:"Heap file"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"heap file"})," stores records in no specific order. New records are placed wherever space is available."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Fast inserts"}),e.jsx("li",{children:"Search can be slow without an index"}),e.jsx("li",{children:"Common base storage method for tables"})]}),e.jsx("p",{className:"note",children:"Heap does not mean heap memory. It just means unordered file storage."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(l,{})}),e.jsx("h3",{className:"h3",children:"Sequential file"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"sequential file"})," stores records in a sorted order based on a key like an id or timestamp."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Good for range queries and ordered scanning"}),e.jsx("li",{children:"Insert and delete can be slower because order must be maintained"}),e.jsx("li",{children:"Often used for logs or data files designed for sequential reads"})]}),e.jsx("p",{className:"note",children:"Think: sequential is scan-friendly, heap is insert-friendly."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"Log file"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"log file"})," records changes made by transactions. It is used for crash recovery to restore a consistent state. Logs are usually written sequentially, which is fast on disk."]}),e.jsxs("div",{className:"compare",children:[e.jsxs("div",{className:"row head",children:[e.jsx("div",{children:"Data file"}),e.jsx("div",{children:"Log file"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Stores actual table data pages and index pages"}),e.jsx("div",{children:"Stores change history and transaction actions"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Random reads and writes based on queries"}),e.jsx("div",{children:"Mostly sequential writes"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Used for normal query reads"}),e.jsx("div",{children:"Used mainly for recovery and durability"})]})]}),e.jsx("p",{className:"note",children:"Logging is a key reason databases can recover after a crash without losing committed transactions."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(h,{})}),e.jsx("h3",{className:"h3",children:"Write-ahead logging - WAL"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"WAL"})," means ",e.jsx("b",{children:"Write-Ahead Logging"}),". Rule: write the log record to disk before writing the data page to disk. This ensures durability and correct recovery."]}),e.jsxs("div",{className:"steps",children:[e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"n",children:"1"}),e.jsx("div",{className:"t",children:"Transaction updates a row in memory"})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"n",children:"2"}),e.jsx("div",{className:"t",children:"DB writes the change into the log file on disk"})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"n",children:"3"}),e.jsx("div",{className:"t",children:"Later, DB writes the actual data page to disk"})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"n",children:"4"}),e.jsx("div",{className:"t",children:"On crash, DB replays logs to redo committed changes and undo incomplete ones"})]})]}),e.jsx("p",{className:"note",children:"WAL makes commits reliable even if data pages are flushed later."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(a,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"Disk stores pages. Buffer pool caches pages. Logs record changes. WAL means log first, data later."})]})]})]})})]})};export{b as default};
