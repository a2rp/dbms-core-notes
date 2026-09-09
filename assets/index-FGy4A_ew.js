import{c as t,r as i,j as e,l as s,d,a,q as p,w as n,t as x}from"./index-Mc0Xt7Eb.js";const m={Wrapper:t.section`
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

        .hero {
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 12px;
            box-shadow: 0 14px 30px var(--color-shadow);
        }

        .heroTop {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            margin-bottom: 10px;
        }

        .heroIcon {
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

        .heroIcon svg {
            width: 18px;
            height: 18px;
        }

        .heroTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 2px;
        }

        .heroSub {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .mini {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
            align-items: center;
        }

        .pill {
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            color: var(--color-text-primary);
            font-size: 12.5px;
            font-weight: 900;
        }

        .dash {
            color: var(--color-text-muted);
            font-size: 12px;
            user-select: none;
        }

        .grid {
            margin-top: 12px;
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

        .code {
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            border-radius: 14px;
            padding: 10px;
            overflow: auto;
            color: var(--color-text-primary);
            font-size: 12.5px;
            line-height: 1.55;
            margin-top: 10px;
            white-space: pre;
        }

        .twoCol {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 12px;
            margin-top: 10px;
        }

        .box {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface) 86%,
                transparent
            );
            padding: 10px;
        }

        .boxTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 8px;
        }

        .small {
            margin-top: 8px;
            color: var(--color-text-muted);
            font-size: 12.5px;
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

            .twoCol {
                grid-template-columns: 1fr;
            }
        }
    `},b=()=>{const[o,l]=i.useState(!0),r=i.useMemo(()=>({id:"joinsAndSubqueries",title:"Joins and Subqueries",sub:"INNER, LEFT, RIGHT, FULL, self join, cross join, subquery, correlated subquery, EXISTS, and nested queries."}),[]);return e.jsxs(m.Wrapper,{id:r.id,children:[e.jsxs("button",{type:"button",className:`head ${o?"open":""}`,onClick:()=>l(c=>!c),"aria-expanded":o,"aria-controls":`${r.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(s,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:r.title}),e.jsx("span",{className:"badge",children:"SQL"})]}),e.jsx("p",{className:"sub",children:r.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(d,{})})]}),e.jsx("div",{id:`${r.id}-content`,className:`content ${o?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"hero",children:[e.jsxs("div",{className:"heroTop",children:[e.jsx("span",{className:"heroIcon",children:e.jsx(a,{})}),e.jsxs("div",{children:[e.jsx("div",{className:"heroTitle",children:"Core idea"}),e.jsx("div",{className:"heroSub",children:"A join combines rows from two tables using a matching condition. A subquery is a query inside another query, used to filter or compute results."})]})]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"JOIN - combine rows"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"SUBQUERY - query inside query"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"EXISTS - checks presence"})]})]}),e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"INNER JOIN"})]}),e.jsx("p",{className:"p",children:'Returns only rows that match in both tables based on the join condition. Think "intersection".'}),e.jsx("pre",{className:"code",children:`SELECT e.id, e.name, d.deptName
FROM employees e
INNER JOIN departments d
ON e.deptId = d.id;`}),e.jsx("p",{className:"note",children:"If an employee has no matching department, that employee is not returned."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(s,{})}),e.jsx("h3",{className:"h3",children:"LEFT JOIN"})]}),e.jsx("p",{className:"p",children:"Returns all rows from the left table, plus matching rows from the right table. If no match, right side columns become NULL."}),e.jsx("pre",{className:"code",children:`SELECT c.id, c.name, o.orderId
FROM customers c
LEFT JOIN orders o
ON o.customerId = c.id;`}),e.jsx("p",{className:"note",children:'Useful to find "items with no match" using WHERE rightTableColumn IS NULL.'})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(s,{})}),e.jsx("h3",{className:"h3",children:"RIGHT JOIN"})]}),e.jsx("p",{className:"p",children:"Returns all rows from the right table, plus matching rows from the left table. If no match, left side columns become NULL."}),e.jsx("pre",{className:"code",children:`SELECT e.id, e.name, d.deptName
FROM employees e
RIGHT JOIN departments d
ON e.deptId = d.id;`}),e.jsx("p",{className:"note",children:"Many teams avoid RIGHT JOIN and use LEFT JOIN by swapping tables for readability."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(s,{})}),e.jsx("h3",{className:"h3",children:"FULL JOIN"})]}),e.jsx("p",{className:"p",children:"Returns all rows from both tables. Matching rows are merged. Non-matching rows appear with NULLs for missing side."}),e.jsx("pre",{className:"code",children:`SELECT a.id, a.name, b.info
FROM tableA a
FULL OUTER JOIN tableB b
ON a.id = b.aId;`}),e.jsx("p",{className:"note",children:"Some DBs do not support FULL OUTER JOIN directly. Workaround is UNION of LEFT and RIGHT joins."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(a,{})}),e.jsx("h3",{className:"h3",children:"Self join"})]}),e.jsx("p",{className:"p",children:"Joining a table with itself. Used when a table has relationships inside itself, like employees and their managers."}),e.jsx("pre",{className:"code",children:`SELECT e.name AS employeeName, m.name AS managerName
FROM employees e
LEFT JOIN employees m
ON e.managerId = m.id;`}),e.jsx("p",{className:"note",children:"Aliases are required to distinguish the same table as two roles."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(a,{})}),e.jsx("h3",{className:"h3",children:"CROSS JOIN"})]}),e.jsx("p",{className:"p",children:"Produces a Cartesian product. Every row of left table combines with every row of right table. Use carefully."}),e.jsx("pre",{className:"code",children:`SELECT s.size, c.color
FROM sizes s
CROSS JOIN colors c;`}),e.jsx("p",{className:"note",children:"Useful for generating combinations, but can explode row count quickly."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(n,{})}),e.jsx("h3",{className:"h3",children:"Subquery"})]}),e.jsx("p",{className:"p",children:"A subquery is a query inside another query. It can be used in WHERE, SELECT, FROM, and even in HAVING. It helps when one query needs result from another."}),e.jsxs("div",{className:"twoCol",children:[e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"boxTitle",children:"Subquery in WHERE"}),e.jsx("pre",{className:"code",children:`SELECT name
FROM employees
WHERE salary > (
    SELECT AVG(salary) FROM employees
);`}),e.jsx("div",{className:"small",children:"Find employees whose salary is above average."})]}),e.jsxs("div",{className:"box",children:[e.jsx("div",{className:"boxTitle",children:"Subquery in FROM"}),e.jsx("pre",{className:"code",children:`SELECT deptId, avgSalary
FROM (
    SELECT deptId, AVG(salary) AS avgSalary
    FROM employees
    GROUP BY deptId
) t
WHERE avgSalary > 50000;`}),e.jsx("div",{className:"small",children:"Make a derived table and filter on it."})]})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"Correlated subquery"})]}),e.jsx("p",{className:"p",children:"A correlated subquery depends on the outer query row. It runs once per row of the outer query. It can be slower than joins, but is sometimes the clearest way to express logic."}),e.jsx("pre",{className:"code",children:`SELECT e.name, e.salary
FROM employees e
WHERE e.salary > (
    SELECT AVG(e2.salary)
    FROM employees e2
    WHERE e2.deptId = e.deptId
);`}),e.jsx("p",{className:"note",children:"This finds employees earning above their own department average."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(n,{})}),e.jsx("h3",{className:"h3",children:"EXISTS"})]}),e.jsx("p",{className:"p",children:"EXISTS checks whether the subquery returns at least one row. It returns true or false. It does not care about values, only presence."}),e.jsx("pre",{className:"code",children:`SELECT c.id, c.name
FROM customers c
WHERE EXISTS (
    SELECT 1
    FROM orders o
    WHERE o.customerId = c.id
);`}),e.jsx("p",{className:"note",children:"Often faster than IN for large datasets because it can stop at first match."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(a,{})}),e.jsx("h3",{className:"h3",children:"Nested queries"})]}),e.jsx("p",{className:"p",children:"Nested queries are multiple levels of subqueries. Useful but can reduce readability. Use with care."}),e.jsx("pre",{className:"code",children:`SELECT name
FROM employees
WHERE deptId IN (
    SELECT id
    FROM departments
    WHERE locationId IN (
        SELECT id FROM locations WHERE city = 'Bangalore'
    )
);`}),e.jsx("p",{className:"note",children:"If it gets too nested, consider rewriting using joins for clarity and performance."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(s,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"INNER gives matches, LEFT keeps left, RIGHT keeps right, FULL keeps all. Subquery is query inside query. Correlated runs per row. EXISTS checks presence."})]})]})]})})]})};export{b as default};
