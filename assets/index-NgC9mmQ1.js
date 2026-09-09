import{c as t,r as i,j as e,b as s,d as l,o as c,H as d,T as p,F as x,E as h}from"./index-Mc0Xt7Eb.js";const m={Wrapper:t.section`
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

        .cIcon.warn {
            color: var(--color-warning);
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-warning) 10%, transparent);
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

        .badGood {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 10px;
            margin: 10px 0 10px;
        }

        .bgCard {
            border-radius: 14px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 10px;
        }

        .bgCard.bad {
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-error) 10%, transparent);
        }

        .bgCard.good {
            box-shadow: 0 0 0 4px
                color-mix(in srgb, var(--color-success) 10%, transparent);
        }

        .bgTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 12.5px;
            margin-bottom: 6px;
        }

        .bgText {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
            margin-bottom: 8px;
        }

        .bgMono {
            border-radius: 12px;
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            padding: 10px;
            color: var(--color-text-primary);
            font-size: 12.5px;
            line-height: 1.45;
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
            overflow-x: auto;
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

            .badGood {
                grid-template-columns: 1fr;
            }

            .kv {
                grid-template-columns: 1fr;
            }
        }
    `},b=()=>{const[a,o]=i.useState(!0),r=i.useMemo(()=>({id:"securityInDbms",title:"Security in DBMS",sub:"Authentication, authorization, roles, encryption at rest and in transit, and SQL injection basics."}),[]);return e.jsxs(m.Wrapper,{id:r.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>o(n=>!n),"aria-expanded":a,"aria-controls":`${r.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(s,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:r.title}),e.jsx("span",{className:"badge",children:"Must know"})]}),e.jsx("p",{className:"sub",children:r.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(l,{})})]}),e.jsx("div",{id:`${r.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(c,{})}),e.jsx("h3",{className:"h3",children:"Authentication"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Authentication"}),' means verifying identity. DBMS checks "who you are" before allowing access.']}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Common methods - password, certificate, token, SSO (Single Sign-On)"}),e.jsx("li",{children:"Good practice - strong passwords, rotate credentials, use MFA (Multi-Factor Authentication)"})]}),e.jsx("p",{className:"note",children:"Memory: authentication is identity proof."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(d,{})}),e.jsx("h3",{className:"h3",children:"Authorization"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Authorization"}),' means permissions. DBMS decides "what you can do" after you are authenticated.']}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"READ"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"WRITE"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"ADMIN"})]}),e.jsx("p",{className:"note",children:"Memory: authorization is allowed actions."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"Roles"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"role"})," is a named set of permissions. Instead of giving permissions to each user one by one, assign a role to a user."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why roles"}),e.jsx("div",{className:"v",children:"Easier management, less mistakes, consistent access control."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Examples"}),e.jsxs("div",{className:"v",children:["reader role - only SELECT",e.jsx("span",{className:"small",children:"writer role - SELECT + INSERT + UPDATE"}),e.jsx("span",{className:"small",children:"admin role - schema changes + user management"})]})]})]}),e.jsx("p",{className:"note",children:"Follow least privilege: give only the permissions needed for the job."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"Encryption at rest"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Encryption at rest"})," means encrypting data stored on disk. If someone steals the database files or disk snapshot, they cannot read it without the key."]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Applies to - data files, backups, snapshots"}),e.jsx("li",{children:"Common approach - TDE (Transparent Data Encryption)"}),e.jsx("li",{children:"Key management matters - keep keys separate from data"})]}),e.jsx("p",{className:"note",children:"At rest protects storage. It does not protect data while travelling on the network."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(s,{})}),e.jsx("h3",{className:"h3",children:"Encryption in transit"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Encryption in transit"})," means encrypting data while it moves between client and DB server, or between DB nodes. This prevents sniffing and man-in-the-middle attacks."]}),e.jsxs("div",{className:"mini",children:[e.jsx("span",{className:"pill",children:"TLS"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"SSL"}),e.jsx("span",{className:"dash",children:"-"}),e.jsx("span",{className:"pill",children:"Certificates"})]}),e.jsx("p",{className:"note",children:"Use TLS. SSL term is still used, but modern setups are TLS based."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon warn",children:e.jsx(h,{})}),e.jsx("h3",{className:"h3",children:"SQL injection basics"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"SQL injection"})," is an attack where an attacker tricks your app into running unintended SQL by injecting input into a query string. This can leak data, bypass login, or even delete tables."]}),e.jsxs("div",{className:"badGood",children:[e.jsxs("div",{className:"bgCard bad",children:[e.jsx("div",{className:"bgTitle",children:"Bad pattern"}),e.jsx("div",{className:"bgText",children:"Building SQL by string concatenation with user input."}),e.jsx("div",{className:"bgMono",children:'SELECT * FROM users WHERE email = " + userEmail'})]}),e.jsxs("div",{className:"bgCard good",children:[e.jsx("div",{className:"bgTitle",children:"Good pattern"}),e.jsx("div",{className:"bgText",children:"Use parameterized queries or prepared statements."}),e.jsx("div",{className:"bgMono",children:"SELECT * FROM users WHERE email = ?"})]})]}),e.jsxs("ul",{className:"list",children:[e.jsx("li",{children:"Always use prepared statements and parameterized queries"}),e.jsx("li",{children:"Validate input types and lengths"}),e.jsx("li",{children:"Use least privilege DB users for apps"}),e.jsx("li",{children:"Avoid showing raw SQL errors to users"})]}),e.jsx("p",{className:"note",children:"Most SQL injection happens at application layer, not inside the DBMS itself."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(s,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"Authentication - who you are. Authorization - what you can do. Encrypt disk and network. Prevent SQL injection with parameters."})]})]})]})})]})};export{b as default};
