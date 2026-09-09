import{c,r as i,j as e,i as l,d,a as r,m as p,n,o as x,p as m,q as h}from"./index-D5IfMMY7.js";const v={Wrapper:c.section`
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

        .mapRules {
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

        .mRow {
            display: grid;
            grid-template-columns: 200px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .mRow:first-child {
            border-top: 0;
        }

        .mRow.head {
            background: color-mix(
                in srgb,
                var(--color-surface) 80%,
                transparent
            );
        }

        .mRow.head div {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
        }

        .mRow div {
            color: var(--color-text-secondary);
            font-size: 12.8px;
            line-height: 1.5;
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

            .mRow {
                grid-template-columns: 1fr;
            }
        }
    `},j=()=>{const[a,t]=i.useState(!0),s=i.useMemo(()=>({id:"erModel",title:"ER Model",sub:"Entity, attributes, keys, weak entities, relationships, cardinality, participation, and ER to relational mapping rules."}),[]);return e.jsxs(v.Wrapper,{id:s.id,children:[e.jsxs("button",{type:"button",className:`head ${a?"open":""}`,onClick:()=>t(o=>!o),"aria-expanded":a,"aria-controls":`${s.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(l,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:s.title}),e.jsx("span",{className:"badge",children:"Design"})]}),e.jsx("p",{className:"sub",children:s.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(d,{})})]}),e.jsx("div",{id:`${s.id}-content`,className:`content ${a?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(r,{})}),e.jsx("h3",{className:"h3",children:"Entity"})]}),e.jsxs("p",{className:"p",children:["An ",e.jsx("b",{children:"entity"})," is a real-world object or concept that you want to store data about."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Examples"}),e.jsxs("ul",{className:"exList",children:[e.jsx("li",{children:"Student"}),e.jsx("li",{children:"Customer"}),e.jsx("li",{children:"Order"}),e.jsx("li",{children:"Employee"})]})]}),e.jsx("p",{className:"note",children:"In relational DBs, entities usually become tables."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"Attribute"})]}),e.jsxs("p",{className:"p",children:["An ",e.jsx("b",{children:"attribute"})," is a property that describes an entity. Attributes become columns in a table."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("ul",{className:"exList",children:e.jsx("li",{children:"Student has name, rollNo, dob, phone"})})]}),e.jsx("p",{className:"note",children:"Attribute types matter because they change how we map to tables."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(n,{})}),e.jsx("h3",{className:"h3",children:"Attribute types"})]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Simple"}),e.jsxs("div",{className:"v",children:["Cannot be broken into smaller parts.",e.jsx("span",{className:"small",children:"Example: age, salary, rollNo"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Composite"}),e.jsxs("div",{className:"v",children:["Can be broken into sub-parts.",e.jsx("span",{className:"small",children:"Example: name -> firstName, lastName. address -> city, state, pincode"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Multivalued"}),e.jsxs("div",{className:"v",children:["Can have multiple values for a single entity.",e.jsx("span",{className:"small",children:"Example: phoneNumbers, skills, emailAddresses"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Derived"}),e.jsxs("div",{className:"v",children:["Computed from other attributes.",e.jsx("span",{className:"small",children:"Example: age derived from dateOfBirth. totalAmount derived from orderItems"})]})]})]}),e.jsx("p",{className:"note",children:"Composite attributes often become multiple columns. Multivalued attributes usually become a separate table."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(x,{})}),e.jsx("h3",{className:"h3",children:"Primary key"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"primary key"})," is an attribute or set of attributes that uniquely identifies an entity instance."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Examples"}),e.jsxs("ul",{className:"exList",children:[e.jsx("li",{children:"studentId uniquely identifies a student"}),e.jsx("li",{children:"orderId uniquely identifies an order"})]})]}),e.jsx("p",{className:"note",children:"Primary key must be unique and not null."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(m,{})}),e.jsx("h3",{className:"h3",children:"Weak entity"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"weak entity"})," cannot be uniquely identified by its own attributes alone. It depends on an owner (strong entity) for identification."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Example"}),e.jsx("ul",{className:"exList",children:e.jsx("li",{children:"Dependent depends on Employee. Dependent is identified by (employeeId, dependentName)."})})]}),e.jsx("p",{className:"note",children:"Weak entity typically uses a composite primary key including owner key."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(h,{})}),e.jsx("h3",{className:"h3",children:"Relationship"})]}),e.jsxs("p",{className:"p",children:["A ",e.jsx("b",{children:"relationship"})," describes how two or more entities are connected. It can also have its own attributes."]}),e.jsxs("div",{className:"ex",children:[e.jsx("div",{className:"exTitle",children:"Examples"}),e.jsxs("ul",{className:"exList",children:[e.jsx("li",{children:"Student enrolls in Course"}),e.jsx("li",{children:"Customer places Order"}),e.jsx("li",{children:"Employee works in Department"})]})]}),e.jsx("p",{className:"note",children:"Many-to-many relationships usually become a separate table."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(r,{})}),e.jsx("h3",{className:"h3",children:"Cardinality"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Cardinality"})," defines how many instances of one entity can be associated with instances of another entity."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"1:1"}),e.jsxs("div",{className:"v",children:["One to one",e.jsx("span",{className:"small",children:"Example: Person - Passport (one person has one passport)"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"1:N"}),e.jsxs("div",{className:"v",children:["One to many",e.jsx("span",{className:"small",children:"Example: Department - Employees (one department has many employees)"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"M:N"}),e.jsxs("div",{className:"v",children:["Many to many",e.jsx("span",{className:"small",children:"Example: Students - Courses (many students take many courses)"})]})]})]})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(r,{})}),e.jsx("h3",{className:"h3",children:"Participation"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Participation"})," tells whether an entity must be part of a relationship or not."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Total participation"}),e.jsxs("div",{className:"v",children:["Every entity instance must participate.",e.jsx("span",{className:"small",children:"Example: Every Order must be placed by a Customer."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Partial participation"}),e.jsxs("div",{className:"v",children:["Participation is optional for some instances.",e.jsx("span",{className:"small",children:"Example: A Customer may have zero Orders."})]})]})]}),e.jsx("p",{className:"note",children:"Total means mandatory. Partial means optional."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(n,{})}),e.jsx("h3",{className:"h3",children:"ER to relational mapping rules"})]}),e.jsxs("div",{className:"mapRules",children:[e.jsxs("div",{className:"mRow head",children:[e.jsx("div",{className:"c1",children:"ER concept"}),e.jsx("div",{className:"c2",children:"Relational mapping"})]}),e.jsxs("div",{className:"mRow",children:[e.jsx("div",{className:"c1",children:"Strong entity"}),e.jsx("div",{className:"c2",children:"Create a table with columns for attributes. Choose primary key."})]}),e.jsxs("div",{className:"mRow",children:[e.jsx("div",{className:"c1",children:"Composite attribute"}),e.jsx("div",{className:"c2",children:"Break into multiple columns (address -> city, state, pincode)."})]}),e.jsxs("div",{className:"mRow",children:[e.jsx("div",{className:"c1",children:"Multivalued attribute"}),e.jsx("div",{className:"c2",children:"Create a separate table with (ownerPK, attributeValue)."})]}),e.jsxs("div",{className:"mRow",children:[e.jsx("div",{className:"c1",children:"Derived attribute"}),e.jsx("div",{className:"c2",children:"Usually not stored, computed when needed (age from dob)."})]}),e.jsxs("div",{className:"mRow",children:[e.jsx("div",{className:"c1",children:"1:1 relationship"}),e.jsx("div",{className:"c2",children:"Put a foreign key in one table. Prefer FK on total participation side. Add unique constraint."})]}),e.jsxs("div",{className:"mRow",children:[e.jsx("div",{className:"c1",children:"1:N relationship"}),e.jsx("div",{className:"c2",children:'Put foreign key of "1 side" into "N side" table.'})]}),e.jsxs("div",{className:"mRow",children:[e.jsx("div",{className:"c1",children:"M:N relationship"}),e.jsx("div",{className:"c2",children:"Create a new table with both primary keys as foreign keys, plus relationship attributes."})]}),e.jsxs("div",{className:"mRow",children:[e.jsx("div",{className:"c1",children:"Weak entity"}),e.jsx("div",{className:"c2",children:"Create a table with owner PK as FK. Primary key is (ownerPK + partialKey)."})]})]}),e.jsx("p",{className:"note",children:"Shortcut memory: 1:N -> FK on N side. M:N -> new table. Multivalued -> new table. Composite -> split columns."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(l,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"ER model is your blueprint. Entities become tables. Relationships decide where foreign keys go."})]})]})]})})]})};export{j as default};
