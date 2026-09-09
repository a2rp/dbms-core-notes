import{c as t,r as l,j as e,w as a,d as p,i,y as o,s as x,z as c,A as h}from"./index-B13LwCCT.js";const m={Wrapper:t.section`
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

        .flow {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
            margin-top: 10px;
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

        .code {
            border-radius: 14px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            padding: 10px;
            margin-top: 10px;
            overflow: auto;
        }

        .pre {
            margin: 0;
            color: var(--color-text-primary);
            font-size: 12.5px;
            line-height: 1.55;
            white-space: pre;
        }

        .aggGrid {
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
            margin-top: 10px;
        }

        .agg {
            grid-column: span 4;
            padding: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
        }

        .aggTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .aggSub {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.45;
            margin-bottom: 8px;
        }

        .miniPre {
            font-size: 12px;
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

            .agg {
                grid-column: span 12;
            }
        }
    `},N=()=>{const[r,n]=l.useState(!0),s=l.useMemo(()=>({id:"sqlQueryingEssentials",title:"SQL Querying Essentials",sub:"WHERE, logical operators, BETWEEN, IN, LIKE, ORDER BY, GROUP BY, HAVING, and aggregate functions with examples."}),[]);return e.jsxs(m.Wrapper,{id:s.id,children:[e.jsxs("button",{type:"button",className:`head ${r?"open":""}`,onClick:()=>n(d=>!d),"aria-expanded":r,"aria-controls":`${s.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(a,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:s.title}),e.jsx("span",{className:"badge",children:"SQL"})]}),e.jsx("p",{className:"sub",children:s.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(p,{})})]}),e.jsx("div",{id:`${s.id}-content`,className:`content ${r?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(i,{})}),e.jsx("h3",{className:"h3",children:"Mental model - query flow"})]}),e.jsx("p",{className:"p",children:"A simple way to remember query behavior is the typical pipeline below. This helps you debug GROUP BY and HAVING fast."}),e.jsxs("div",{className:"flow",children:[e.jsx("span",{className:"pill",children:"FROM"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"WHERE"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"GROUP BY"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"HAVING"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"SELECT"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"ORDER BY"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"LIMIT"})]}),e.jsx("p",{className:"note",children:"WHERE filters rows before grouping. HAVING filters groups after GROUP BY."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"WHERE clause"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"WHERE"})," filters rows based on a condition. It runs before GROUP BY."]}),e.jsx("div",{className:"code",children:e.jsx("pre",{className:"pre",children:`SELECT * 
FROM users
WHERE city = 'Bangalore';`})}),e.jsx("p",{className:"note",children:"If there is no WHERE, SQL uses all rows."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"AND, OR, NOT"})]}),e.jsx("p",{className:"p",children:"Combine conditions using logical operators."}),e.jsx("div",{className:"code",children:e.jsx("pre",{className:"pre",children:`SELECT * 
FROM orders
WHERE status = 'PAID'
  AND amount >= 500;

SELECT * 
FROM users
WHERE city = 'Bhopal'
   OR city = 'Bangalore';

SELECT * 
FROM users
WHERE NOT isBlocked = true;`})}),e.jsx("p",{className:"note",children:"Use parentheses when mixing AND and OR to avoid surprises."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(c,{})}),e.jsx("h3",{className:"h3",children:"BETWEEN"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"BETWEEN"})," checks a range, usually inclusive on both ends."]}),e.jsx("div",{className:"code",children:e.jsx("pre",{className:"pre",children:`SELECT * 
FROM payments
WHERE amount BETWEEN 100 AND 500;

SELECT * 
FROM logs
WHERE createdAt BETWEEN '2026-03-01' AND '2026-03-31';`})}),e.jsx("p",{className:"note",children:"If you need strict exclusive range, use < and >."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(i,{})}),e.jsx("h3",{className:"h3",children:"IN"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"IN"})," matches any value from a list. It is cleaner than writing many OR conditions."]}),e.jsx("div",{className:"code",children:e.jsx("pre",{className:"pre",children:`SELECT * 
FROM users
WHERE role IN ('ADMIN', 'EMPLOYEE', 'REPORTS_ONLY');`})}),e.jsx("p",{className:"note",children:"IN also works with subqueries that return a list."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(a,{})}),e.jsx("h3",{className:"h3",children:"LIKE"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"LIKE"})," matches patterns in text. Wildcards are % for many chars and _ for one char."]}),e.jsx("div",{className:"code",children:e.jsx("pre",{className:"pre",children:`SELECT * 
FROM users
WHERE name LIKE 'Ash%';

SELECT * 
FROM users
WHERE email LIKE '%@gmail.com';

SELECT * 
FROM products
WHERE sku LIKE 'A_12%';`})}),e.jsx("p",{className:"note",children:"LIKE can be slow on large tables without proper indexing strategy."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(h,{})}),e.jsx("h3",{className:"h3",children:"ORDER BY"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"ORDER BY"})," sorts the output. Default is ascending (ASC). Use DESC for descending."]}),e.jsx("div",{className:"code",children:e.jsx("pre",{className:"pre",children:`SELECT * 
FROM orders
ORDER BY createdAt DESC;

SELECT * 
FROM users
ORDER BY lastName ASC, firstName ASC;`})}),e.jsx("p",{className:"note",children:"Sorting large results can be expensive, indexes can help."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(i,{})}),e.jsx("h3",{className:"h3",children:"GROUP BY"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"GROUP BY"})," groups rows that share the same value so you can compute aggregates like COUNT or SUM."]}),e.jsx("div",{className:"code",children:e.jsx("pre",{className:"pre",children:`SELECT city, COUNT(*) AS usersCount
FROM users
GROUP BY city;`})}),e.jsx("p",{className:"note",children:"Every selected column must be either grouped or aggregated."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"HAVING"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"HAVING"})," filters groups after GROUP BY. Use it when the condition depends on an aggregate."]}),e.jsx("div",{className:"code",children:e.jsx("pre",{className:"pre",children:`SELECT city, COUNT(*) AS usersCount
FROM users
GROUP BY city
HAVING COUNT(*) >= 10;`})}),e.jsx("p",{className:"note",children:"WHERE cannot use aggregate results, HAVING can."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(c,{})}),e.jsx("h3",{className:"h3",children:"Aggregate functions"})]}),e.jsx("p",{className:"p",children:"Aggregates compute one result from many rows. They are most often used with GROUP BY."}),e.jsxs("div",{className:"aggGrid",children:[e.jsxs("div",{className:"agg",children:[e.jsx("div",{className:"aggTitle",children:"COUNT"}),e.jsx("div",{className:"aggSub",children:"Counts rows or non-null values"}),e.jsx("pre",{className:"pre miniPre",children:"SELECT COUNT(*) FROM users;"})]}),e.jsxs("div",{className:"agg",children:[e.jsx("div",{className:"aggTitle",children:"SUM"}),e.jsx("div",{className:"aggSub",children:"Adds numeric values"}),e.jsx("pre",{className:"pre miniPre",children:"SELECT SUM(amount) FROM payments;"})]}),e.jsxs("div",{className:"agg",children:[e.jsx("div",{className:"aggTitle",children:"AVG"}),e.jsx("div",{className:"aggSub",children:"Average of numeric values"}),e.jsx("pre",{className:"pre miniPre",children:"SELECT AVG(amount) FROM payments;"})]}),e.jsxs("div",{className:"agg",children:[e.jsx("div",{className:"aggTitle",children:"MIN"}),e.jsx("div",{className:"aggSub",children:"Smallest value"}),e.jsx("pre",{className:"pre miniPre",children:"SELECT MIN(amount) FROM payments;"})]}),e.jsxs("div",{className:"agg",children:[e.jsx("div",{className:"aggTitle",children:"MAX"}),e.jsx("div",{className:"aggSub",children:"Largest value"}),e.jsx("pre",{className:"pre miniPre",children:"SELECT MAX(amount) FROM payments;"})]})]}),e.jsx("p",{className:"note",children:"COUNT(column) ignores NULL. COUNT(*) counts rows."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(a,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"WHERE filters rows, GROUP BY makes groups, HAVING filters groups, ORDER BY sorts output."})]})]})]})})]})};export{N as default};
