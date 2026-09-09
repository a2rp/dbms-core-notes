import{c as n,r as a,j as e,K as i,d as t,E as d,g as o,x as p,C as x,U as h}from"./index-B13LwCCT.js";const m={Wrapper:n.section`
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

        .kvs {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .kv {
            display: grid;
            grid-template-columns: 170px 1fr;
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

        .scenario {
            display: grid;
            gap: 10px;
            margin-top: 10px;
        }

        .step {
            display: grid;
            grid-template-columns: 34px 1fr;
            gap: 10px;
            align-items: center;
            padding: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .num {
            width: 28px;
            height: 28px;
            border-radius: 10px;
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
            font-size: 12px;
        }

        .txt {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .txt b {
            color: var(--color-text-primary);
            font-weight: 900;
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
    `},v=()=>{const[s,l]=a.useState(!0),r=a.useMemo(()=>({id:"backupAndRecovery",title:"Backup and Recovery",sub:"Full, incremental, differential backups, crash recovery, logs, and checkpoints."}),[]);return e.jsxs(m.Wrapper,{id:r.id,children:[e.jsxs("button",{type:"button",className:`head ${s?"open":""}`,onClick:()=>l(c=>!c),"aria-expanded":s,"aria-controls":`${r.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(i,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:r.title}),e.jsx("span",{className:"badge",children:"Safety"})]}),e.jsx("p",{className:"sub",children:r.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(t,{})})]}),e.jsx("div",{id:`${r.id}-content`,className:`content ${s?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(d,{})}),e.jsx("h3",{className:"h3",children:"Why backup and recovery matter"})]}),e.jsxs("p",{className:"p",children:["Backups protect you from ",e.jsx("b",{children:"human mistakes"})," ","(accidental delete),",e.jsx("b",{children:"hardware failures"}),", ",e.jsx("b",{children:"software bugs"}),", and ",e.jsx("b",{children:"crashes"}),". Recovery is the process of bringing the database back to a correct state."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Backup"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Restore"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Replay logs"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Consistent state"})]}),e.jsx("p",{className:"note",children:"Backups give you a base copy. Logs help you recover the latest committed changes."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"Backup types"})]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Full backup"}),e.jsxs("div",{className:"v",children:["Takes a complete copy of the database at a point in time.",e.jsx("span",{className:"small",children:"Pros: simplest restore - Cons: slower and larger size"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Incremental backup"}),e.jsxs("div",{className:"v",children:["Backs up only the data changed since the"," ",e.jsx("b",{children:"last backup"})," (full or incremental).",e.jsx("span",{className:"small",children:"Pros: fast and small - Cons: restore needs full + all incrementals"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Differential backup"}),e.jsxs("div",{className:"v",children:["Backs up only the data changed since the"," ",e.jsx("b",{children:"last full backup"}),".",e.jsx("span",{className:"small",children:"Pros: restore needs full + latest differential - Cons: grows bigger over time"})]})]})]}),e.jsxs("div",{className:"compare",children:[e.jsxs("div",{className:"row head",children:[e.jsx("div",{children:"Type"}),e.jsx("div",{children:"Restore requirement"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Full"}),e.jsx("div",{children:"Restore the full backup"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Incremental"}),e.jsx("div",{children:"Full + every incremental in order"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Differential"}),e.jsx("div",{children:"Full + latest differential"})]})]}),e.jsx("p",{className:"note",children:"Simple interview line: Incremental is smaller but restore is longer. Differential is larger but restore is simpler."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"Crash recovery"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Crash recovery"})," means restoring the database to a correct state after a crash like power loss or server restart."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:["Ensure ",e.jsx("b",{children:"committed"})," transactions are not lost"]}),e.jsxs("li",{children:["Undo ",e.jsx("b",{children:"uncommitted"})," transactions to avoid partial updates"]}),e.jsx("li",{children:"Bring database back to a consistent state"})]}),e.jsx("p",{className:"note",children:"Recovery is mainly about redo committed work and undo incomplete work."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"Log-based recovery"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Log-based recovery"})," uses a log file that records changes made by transactions. The log is used to ",e.jsx("b",{children:"redo"})," or ",e.jsx("b",{children:"undo"})," operations during recovery."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Redo"}),e.jsx("div",{className:"v",children:"Re-apply changes of committed transactions if they were not written to disk."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Undo"}),e.jsx("div",{className:"v",children:"Roll back changes of uncommitted transactions to remove partial updates."})]})]}),e.jsx("p",{className:"note",children:"Logs are usually written before data pages. That rule is called WAL."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"Checkpoints"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"checkpoint"}),' is a marker that says "up to this point, the database has flushed enough info to make recovery faster". It reduces how far back the DBMS must scan the log after a crash.']}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Log grows"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Checkpoint"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Less redo work"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Faster restart"})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Checkpoints write a safe recovery point into the log"}),e.jsx("li",{children:"DBMS flushes some dirty pages to disk"}),e.jsx("li",{children:"Recovery scans logs mainly after the last checkpoint"})]}),e.jsx("p",{className:"note",children:"Without checkpoints, recovery may need to scan a huge log, slowing restart."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(h,{})}),e.jsx("h3",{className:"h3",children:"Quick scenario you can say in interviews"})]}),e.jsxs("div",{className:"scenario",children:[e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"num",children:"1"}),e.jsxs("div",{className:"txt",children:["Restore latest ",e.jsx("b",{children:"full backup"})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"num",children:"2"}),e.jsxs("div",{className:"txt",children:["Apply ",e.jsx("b",{children:"latest differential"})," or all"," ",e.jsx("b",{children:"incrementals"})]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"num",children:"3"}),e.jsxs("div",{className:"txt",children:["Use ",e.jsx("b",{children:"logs"})," to redo committed and undo uncommitted work"]})]}),e.jsxs("div",{className:"step",children:[e.jsx("div",{className:"num",children:"4"}),e.jsx("div",{className:"txt",children:"Checkpoint helps by cutting log scan time"})]})]})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(i,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"Full is base copy. Incremental is since last backup. Differential is since last full. Logs do redo and undo. Checkpoints speed recovery."})]})]})]})})]})};export{v as default};
