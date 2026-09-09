import{c as d,r as o,j as e,H as a,d as t,l,C as x,a as r,I as p,E as h}from"./index-Mc0Xt7Eb.js";const m={Wrapper:d.section`
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

        .exText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
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

        .problems {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .prob {
            grid-column: span 6;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .probTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 6px;
        }

        .probText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .probMini {
            margin-top: 8px;
            padding: 8px 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.5;
        }

        .isoTable {
            margin-top: 10px;
            border-radius: 14px;
            border: 1px solid var(--color-border);
            overflow: hidden;
            background: color-mix(
                in srgb,
                var(--color-surface-2) 76%,
                transparent
            );
        }

        .iRow {
            display: grid;
            grid-template-columns: 1.1fr 1fr 1fr 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .iRow:first-child {
            border-top: 0;
        }

        .iRow.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .iRow.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .iRow div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
        }

        .lvl {
            color: var(--color-text-primary) !important;
            font-weight: 900;
        }

        .good {
            color: color-mix(
                in srgb,
                var(--color-success) 85%,
                #ffffff
            ) !important;
            font-weight: 900;
        }

        .bad {
            color: color-mix(
                in srgb,
                var(--color-warning) 85%,
                #ffffff
            ) !important;
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

            .problems .prob {
                grid-column: span 12;
            }

            .iRow {
                grid-template-columns: 1fr;
            }
        }
    `},b=()=>{const[i,n]=o.useState(!0),s=o.useMemo(()=>({id:"transactionsAndConcurrency",title:"Transactions and Concurrency",sub:"Transaction meaning, ACID, concurrency problems, isolation levels, locks, and 2PL in one block."}),[]);return e.jsxs(m.Wrapper,{id:s.id,children:[e.jsxs("button",{type:"button",className:`head ${i?"open":""}`,onClick:()=>n(c=>!c),"aria-expanded":i,"aria-controls":`${s.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(a,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:s.title}),e.jsx("span",{className:"badge",children:"ACID + Locks"})]}),e.jsx("p",{className:"sub",children:s.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(t,{})})]}),e.jsx("div",{id:`${s.id}-content`,className:`content ${i?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(l,{})}),e.jsx("h3",{className:"h3",children:"Transaction"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"transaction"})," is a group of database operations that must be treated as one logical unit of work. It either ",e.jsx("b",{children:"fully happens"})," or",e.jsx("b",{children:" does not happen"}),"."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"BEGIN"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"READ"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"WRITE"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"COMMIT"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"ROLLBACK"})]}),e.jsx("p",{className:"note",children:"Example: transfer money - debit one account and credit another. Both must succeed together."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"ACID properties"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"ACID"})," describes guarantees that make transactions reliable in real systems."]}),e.jsxs("ul",{className:"list",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Atomicity"})," - all or nothing"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Consistency"})," - rules stay true"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Isolation"})," - concurrent work does not break correctness"]}),e.jsxs("li",{children:[e.jsx("b",{children:"Durability"})," - committed changes survive crashes"]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(r,{})}),e.jsx("h3",{className:"h3",children:"Atomicity"})]}),e.jsx("p",{className:"p",children:"Atomicity means a transaction is indivisible. If any step fails, the DBMS rolls back all changes."}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("div",{className:"exText",children:'Order placed but payment failed - do not keep partial order state saved as "paid".'})]}),e.jsx("p",{className:"note",children:"Rollback is the practical tool that supports atomicity."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(r,{})}),e.jsx("h3",{className:"h3",children:"Consistency"})]}),e.jsx("p",{className:"p",children:"Consistency means the database moves from one valid state to another valid state. Constraints, triggers, and rules must remain satisfied."}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("div",{className:"exText",children:"Balance cannot go below 0 if business rule says no overdraft."})]}),e.jsx("p",{className:"note",children:'Consistency is about correctness rules, not about "same data everywhere".'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(r,{})}),e.jsx("h3",{className:"h3",children:"Isolation"})]}),e.jsx("p",{className:"p",children:"Isolation means multiple transactions can run at the same time without interfering in a way that produces wrong results."}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Mental model"}),e.jsx("div",{className:"exText",children:"Each transaction should behave like it ran alone, even though it did not."})]}),e.jsx("p",{className:"note",children:"Isolation is controlled using locks, MVCC, and isolation levels."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(r,{})}),e.jsx("h3",{className:"h3",children:"Durability"})]}),e.jsx("p",{className:"p",children:"Durability means once a transaction commits, its changes will not be lost even if the system crashes immediately after."}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"How it is achieved"}),e.jsx("div",{className:"exText",children:"Logging and disk writes, often using WAL - write-ahead logging."})]}),e.jsx("p",{className:"note",children:"Commit is considered successful only after the DBMS ensures recovery is possible."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"Concurrency control"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Concurrency control"})," is how DBMS keeps correct results when many users read and write together. Goal is correctness with good performance."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Common approaches"}),e.jsx("div",{className:"v",children:"Locks, timestamps, optimistic control, MVCC - Multi Version Concurrency Control."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Key idea"}),e.jsx("div",{className:"v",children:"Ensure schedules are equivalent to a correct serial order (serializability)."})]})]}),e.jsx("p",{className:"note",children:"Most modern databases use MVCC for reads and locks for writes in some form."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(h,{})}),e.jsx("h3",{className:"h3",children:"Concurrency problems - lost update and read anomalies"})]}),e.jsxs("div",{className:"problems",children:[e.jsxs("div",{className:"prob",children:[e.jsx("div",{className:"probTitle",children:"Lost update"}),e.jsx("div",{className:"probText",children:"Two transactions read the same value and both write back. The later write overwrites the earlier update."}),e.jsx("div",{className:"probMini",children:"T1 reads 100 - T2 reads 100 - T1 writes 120 - T2 writes 110"})]}),e.jsxs("div",{className:"prob",children:[e.jsx("div",{className:"probTitle",children:"Dirty read"}),e.jsx("div",{className:"probText",children:"A transaction reads data written by another transaction that has not committed yet. If the writer rolls back, the reader used invalid data."}),e.jsx("div",{className:"probMini",children:"T1 writes new value - T2 reads it - T1 rollback"})]}),e.jsxs("div",{className:"prob",children:[e.jsx("div",{className:"probTitle",children:"Non-repeatable read"}),e.jsx("div",{className:"probText",children:"A transaction reads the same row twice and gets different values because another transaction updated and committed between the reads."}),e.jsx("div",{className:"probMini",children:"T1 reads row - T2 updates and commit - T1 reads again"})]}),e.jsxs("div",{className:"prob",children:[e.jsx("div",{className:"probTitle",children:"Phantom read"}),e.jsx("div",{className:"probText",children:"A transaction repeats a range query and finds new rows because another transaction inserted rows that match the condition."}),e.jsx("div",{className:"probMini",children:"T1 selects where salary > 50k - T2 inserts new matching row - T1 selects again"})]})]}),e.jsx("p",{className:"note",children:"Dirty read is about uncommitted data. Non-repeatable is row changed. Phantom is new rows in a range."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(r,{})}),e.jsx("h3",{className:"h3",children:"Isolation levels"})]}),e.jsx("p",{className:"p",children:"Isolation levels define which anomalies are allowed for better performance. Higher isolation means fewer anomalies but more blocking and lower concurrency."}),e.jsxs("div",{className:"isoTable",children:[e.jsxs("div",{className:"iRow head",children:[e.jsx("div",{children:"Level"}),e.jsx("div",{children:"Dirty read"}),e.jsx("div",{children:"Non-repeatable"}),e.jsx("div",{children:"Phantom"})]}),e.jsxs("div",{className:"iRow",children:[e.jsx("div",{className:"lvl",children:"Read uncommitted"}),e.jsx("div",{className:"bad",children:"Allowed"}),e.jsx("div",{className:"bad",children:"Allowed"}),e.jsx("div",{className:"bad",children:"Allowed"})]}),e.jsxs("div",{className:"iRow",children:[e.jsx("div",{className:"lvl",children:"Read committed"}),e.jsx("div",{className:"good",children:"Blocked"}),e.jsx("div",{className:"bad",children:"Allowed"}),e.jsx("div",{className:"bad",children:"Allowed"})]}),e.jsxs("div",{className:"iRow",children:[e.jsx("div",{className:"lvl",children:"Repeatable read"}),e.jsx("div",{className:"good",children:"Blocked"}),e.jsx("div",{className:"good",children:"Blocked"}),e.jsx("div",{className:"bad",children:"Sometimes allowed"})]}),e.jsxs("div",{className:"iRow",children:[e.jsx("div",{className:"lvl",children:"Serializable"}),e.jsx("div",{className:"good",children:"Blocked"}),e.jsx("div",{className:"good",children:"Blocked"}),e.jsx("div",{className:"good",children:"Blocked"})]})]}),e.jsx("p",{className:"note",children:"Exact behavior can differ by database engine, but the table is the standard interview model."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(a,{})}),e.jsx("h3",{className:"h3",children:"Locks"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"lock"})," is a control mechanism that limits access to data while a transaction is working. It prevents conflicting operations."]}),e.jsx("p",{className:"note",children:"Locks can be on row, page, table, or even range, depending on DBMS."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(a,{})}),e.jsx("h3",{className:"h3",children:"Shared lock"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Shared lock"})," is used for reading. Many transactions can hold shared locks on the same data at the same time."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Read"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Many allowed"})]}),e.jsx("p",{className:"note",children:"Shared lock blocks writers but not other readers."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(a,{})}),e.jsx("h3",{className:"h3",children:"Exclusive lock"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Exclusive lock"})," is used for writing. Only one transaction can hold it. It blocks other reads and writes on the same data."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"Write"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Only one allowed"})]}),e.jsx("p",{className:"note",children:"Exclusive lock ensures no one reads half-updated data."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(l,{})}),e.jsx("h3",{className:"h3",children:"Two-phase locking - 2PL"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"2PL"})," means ",e.jsx("b",{children:"Two-Phase Locking"}),". It is a locking protocol to ensure serializability. A transaction has two phases for locks."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Growing phase"}),e.jsx("div",{className:"v",children:"Transaction can acquire locks but cannot release any lock."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Shrinking phase"}),e.jsx("div",{className:"v",children:"Transaction releases locks but cannot acquire new locks."})]})]}),e.jsx("p",{className:"note",children:"2PL avoids many anomalies, but it can cause deadlocks when transactions wait on each other."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(a,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"ACID makes transactions reliable. Isolation controls anomalies. Locks and 2PL keep concurrency correct."})]})]})]})})]})};export{b as default};
