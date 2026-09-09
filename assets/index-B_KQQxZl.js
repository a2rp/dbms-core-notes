import{c as s,j as a,F as e,a as r,b as i}from"./index-D5IfMMY7.js";const n={Wrapper:s.section`
        width: 100%;
        padding: 18px 0 6px;

        .top {
            margin-bottom: 12px;
        }

        .title {
            font-size: 22px;
            letter-spacing: 0.2px;
            margin-bottom: 6px;
        }

        .sub {
            max-width: 980px;
            font-size: 14px;
            color: var(--color-text-secondary);
            line-height: 1.65;
            margin-bottom: 10px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .card {
            grid-column: span 4;
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            border: 1px solid var(--color-border);
            border-radius: 16px;
            padding: 14px;
            box-shadow: 0 14px 30px var(--color-shadow);
            position: relative;
            overflow: hidden;
        }

        .card::before {
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

        .cardTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }

        .icon {
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
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-primary) 10%, transparent);
        }

        .icon svg {
            width: 18px;
            height: 18px;
        }

        .h3 {
            font-size: 15px;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            gap: 8px;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
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

        .note {
            margin-top: 4px;
            font-size: 12.5px;
            color: var(--color-text-muted);
            position: relative;
            z-index: 1;
            line-height: 1.6;
        }

        .list {
            display: grid;
            gap: 8px;
            position: relative;
            z-index: 1;
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

        @media (max-width: 980px) {
            .card {
                grid-column: span 12;
            }
        }
    `},o=()=>a.jsxs(n.Wrapper,{id:"aboutDbms",children:[a.jsxs("div",{className:"top",children:[a.jsx("h2",{className:"title",children:"DBMS"}),a.jsx("p",{className:"sub",children:"A DBMS is a Database Management System. It is the software layer that stores data in an organized way and helps you read and update it safely. Instead of scattered files, you get tables, constraints, indexes, and queries that behave predictably under real load."}),a.jsx("p",{className:"sub",children:"The main value is control. A DBMS manages data integrity using keys and constraints, reduces duplication using normalization, and supports powerful searching using SQL. When many users work at the same time, transactions and locks make sure updates remain correct."}),a.jsx("p",{className:"sub",children:"This page is built for revision. You will scan core ideas like ER model, SQL, joins, normalization, ACID, concurrency, indexing, recovery, and basic distributed concepts, with a clear mental model of what happens inside a database engine."})]}),a.jsxs("div",{className:"grid",children:[a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"cardTop",children:[a.jsx("span",{className:"icon",children:a.jsx(e,{})}),a.jsx("h3",{className:"h3",children:"Think in data"})]}),a.jsxs("div",{className:"mini",children:[a.jsx("span",{className:"pill",children:"Tables"}),a.jsx("span",{className:"dash",children:"-"}),a.jsx("span",{className:"pill",children:"Keys"}),a.jsx("span",{className:"dash",children:"-"}),a.jsx("span",{className:"pill",children:"Constraints"}),a.jsx("span",{className:"dash",children:"-"}),a.jsx("span",{className:"pill",children:"Indexes"})]}),a.jsx("p",{className:"note",children:"Tables store rows. Keys define identity. Constraints keep data valid. Indexes make queries fast."})]}),a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"cardTop",children:[a.jsx("span",{className:"icon",children:a.jsx(r,{})}),a.jsx("h3",{className:"h3",children:"Think in queries"})]}),a.jsxs("div",{className:"mini",children:[a.jsx("span",{className:"pill",children:"SELECT"}),a.jsx("span",{className:"dash",children:"-"}),a.jsx("span",{className:"pill",children:"JOIN"}),a.jsx("span",{className:"dash",children:"-"}),a.jsx("span",{className:"pill",children:"GROUP BY"}),a.jsx("span",{className:"dash",children:"-"}),a.jsx("span",{className:"pill",children:"HAVING"})]}),a.jsx("p",{className:"note",children:"Query order: filter, join, group, aggregate, sort, limit. Learn this to debug SQL quickly."})]}),a.jsxs("div",{className:"card",children:[a.jsxs("div",{className:"cardTop",children:[a.jsx("span",{className:"icon",children:a.jsx(i,{})}),a.jsx("h3",{className:"h3",children:"Think in safety"})]}),a.jsxs("ul",{className:"list",children:[a.jsx("li",{children:"ACID keeps transactions correct under failures and concurrency"}),a.jsx("li",{children:"Isolation levels control dirty reads and phantom reads"}),a.jsx("li",{children:"Logs and checkpoints help crash recovery"}),a.jsx("li",{children:"Backups protect from human mistakes and data loss"})]})]})]})]});export{o as default};
