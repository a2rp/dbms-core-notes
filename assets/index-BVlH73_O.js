import{c as n,r as i,j as e,S as s,d,p,i as o,b as t,R as x,E as h}from"./index-Mc0Xt7Eb.js";const m={Wrapper:n.section`
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

        .capGrid {
            margin-top: 10px;
            display: grid;
            grid-template-columns: repeat(12, 1fr);
            gap: 12px;
        }

        .capCard {
            grid-column: span 4;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 12px;
        }

        .capTop {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 8px;
        }

        .capIcon {
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
        }

        .capIcon svg {
            width: 18px;
            height: 18px;
        }

        .capTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13.5px;
        }

        .capText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
        }

        .capEx {
            margin-top: 10px;
            border-top: 1px solid var(--color-border);
            padding-top: 10px;
        }

        .capExTitle {
            color: var(--color-text-primary);
            font-weight: 900;
            font-size: 12.5px;
            margin-bottom: 4px;
        }

        .capExText {
            color: var(--color-text-muted);
            font-size: 12.5px;
            line-height: 1.55;
        }

        .capNote {
            margin-top: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-surface-2) 78%,
                transparent
            );
            padding: 12px;
        }

        .capNoteTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            font-size: 13px;
            margin-bottom: 4px;
        }

        .capNoteText {
            color: var(--color-text-secondary);
            font-size: 13px;
            line-height: 1.55;
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
            grid-template-columns: 1fr 1.2fr;
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

            .capCard {
                grid-column: span 12;
            }

            .row {
                grid-template-columns: 1fr;
            }
        }
    `},g=()=>{const[r,l]=i.useState(!0),a=i.useMemo(()=>({id:"distributedDatabases",title:"Distributed Databases",sub:"Replication, sharding, CAP theorem, and why consistency vs availability becomes a trade-off during partitions."}),[]);return e.jsxs(m.Wrapper,{id:a.id,children:[e.jsxs("button",{type:"button",className:`head ${r?"open":""}`,onClick:()=>l(c=>!c),"aria-expanded":r,"aria-controls":`${a.id}-content`,children:[e.jsxs("div",{className:"left",children:[e.jsx("span",{className:"icon",children:e.jsx(s,{})}),e.jsxs("div",{className:"text",children:[e.jsxs("div",{className:"titleRow",children:[e.jsx("h2",{className:"title",children:a.title}),e.jsx("span",{className:"badge",children:"Scaling"})]}),e.jsx("p",{className:"sub",children:a.sub})]})]}),e.jsx("span",{className:"chev",children:e.jsx(d,{})})]}),e.jsx("div",{id:`${a.id}-content`,className:`content ${r?"show":""}`,children:e.jsxs("div",{className:"inner",children:[e.jsxs("div",{className:"grid",children:[e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(p,{})}),e.jsx("h3",{className:"h3",children:"Replication"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Replication"})," means keeping copies of the same data on multiple machines called"," ",e.jsx("b",{children:"nodes"}),". This improves availability and read performance."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why"}),e.jsx("div",{className:"v",children:"Higher availability, disaster recovery, faster reads near users"})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Common patterns"}),e.jsxs("div",{className:"v",children:["Primary replica - one leader handles writes, followers copy",e.jsx("span",{className:"small",children:"Also called leader follower, primary secondary, master replica"})]})]})]}),e.jsx("p",{className:"note",children:"Replication is about copying the same dataset to more places."})]}),e.jsxs("div",{className:"card",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"Sharding"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Sharding"})," means splitting data into parts called ",e.jsx("b",{children:"shards"})," and storing each shard on different nodes. This improves write scaling and total storage."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Shard key"}),e.jsxs("div",{className:"v",children:["A field used to decide which shard stores a row",e.jsx("span",{className:"small",children:"Example: userId, region, tenantId"})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Goal"}),e.jsx("div",{className:"v",children:"Scale out - more machines = more capacity"})]})]}),e.jsx("p",{className:"note",children:"Replication copies the same data. Sharding splits data across nodes."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(t,{})}),e.jsx("h3",{className:"h3",children:"CAP theorem"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"CAP theorem"})," says that in a distributed system, when a ",e.jsx("b",{children:"network partition"})," happens, you must choose between ",e.jsx("b",{children:"Consistency"})," and"," ",e.jsx("b",{children:"Availability"}),". Partition tolerance is not optional in real distributed networks."]}),e.jsxs("div",{className:"capGrid",children:[e.jsxs("div",{className:"capCard",children:[e.jsxs("div",{className:"capTop",children:[e.jsx("span",{className:"capIcon",children:e.jsx(x,{})}),e.jsx("div",{className:"capTitle",children:"Consistency - C"})]}),e.jsx("p",{className:"capText",children:"Every read returns the latest write or an error. All nodes behave like one correct system."}),e.jsxs("div",{className:"capEx",children:[e.jsx("div",{className:"capExTitle",children:"Example"}),e.jsx("div",{className:"capExText",children:"Bank balance should not show old values after a transfer."})]})]}),e.jsxs("div",{className:"capCard",children:[e.jsxs("div",{className:"capTop",children:[e.jsx("span",{className:"capIcon",children:e.jsx(t,{})}),e.jsx("div",{className:"capTitle",children:"Availability - A"})]}),e.jsx("p",{className:"capText",children:"Every request gets a response, even if it might be stale. System prefers to stay online."}),e.jsxs("div",{className:"capEx",children:[e.jsx("div",{className:"capExTitle",children:"Example"}),e.jsx("div",{className:"capExText",children:"Product catalog can show slightly old data but must respond fast."})]})]}),e.jsxs("div",{className:"capCard",children:[e.jsxs("div",{className:"capTop",children:[e.jsx("span",{className:"capIcon",children:e.jsx(h,{})}),e.jsx("div",{className:"capTitle",children:"Partition tolerance - P"})]}),e.jsx("p",{className:"capText",children:"System continues working even if nodes cannot communicate due to network split."}),e.jsxs("div",{className:"capEx",children:[e.jsx("div",{className:"capExTitle",children:"Example"}),e.jsx("div",{className:"capExText",children:"Data center A cannot reach data center B for some time."})]})]})]}),e.jsxs("div",{className:"capNote",children:[e.jsx("div",{className:"capNoteTitle",children:"Key rule"}),e.jsx("div",{className:"capNoteText",children:"During a partition, you cannot fully guarantee both consistency and availability. You either reject requests to stay consistent, or respond with possible stale data to stay available."})]})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(s,{})}),e.jsx("h3",{className:"h3",children:"Eventual consistency"})]}),e.jsxs("p",{className:"p",children:[e.jsx("b",{children:"Eventual consistency"})," means the system does not guarantee that every read is the latest immediately, but if no new writes happen, all replicas will become consistent after some time."]}),e.jsxs("div",{className:"kvs",children:[e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"Why it exists"}),e.jsx("div",{className:"v",children:"It helps availability and performance in distributed systems."})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"What you may see"}),e.jsxs("div",{className:"v",children:["Stale reads for a short time, then everything matches later.",e.jsx("span",{className:"small",children:"Example: you update your profile photo and some devices show old one for a while."})]})]}),e.jsxs("div",{className:"kv",children:[e.jsx("div",{className:"k",children:"How systems reduce pain"}),e.jsx("div",{className:"v",children:"Read your writes, versioning, conflict resolution, leader based replication, quorums"})]})]}),e.jsx("p",{className:"note",children:"Eventual consistency is common in many NoSQL systems and geo-distributed setups."})]}),e.jsxs("div",{className:"card span12",children:[e.jsxs("div",{className:"cardTop",children:[e.jsx("span",{className:"cIcon",children:e.jsx(o,{})}),e.jsx("h3",{className:"h3",children:"Quick compare"})]}),e.jsxs("div",{className:"compare",children:[e.jsxs("div",{className:"row head",children:[e.jsx("div",{children:"Concept"}),e.jsx("div",{children:"One line meaning"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Replication"}),e.jsx("div",{children:"Copy the same data to multiple nodes"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Sharding"}),e.jsx("div",{children:"Split data into pieces across nodes"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Consistency"}),e.jsx("div",{children:"Reads always reflect latest write or error"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Availability"}),e.jsx("div",{children:"Always respond to requests, even if stale"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Partition tolerance"}),e.jsx("div",{children:"System survives network splits"})]}),e.jsxs("div",{className:"row",children:[e.jsx("div",{children:"Eventual consistency"}),e.jsx("div",{children:"All replicas match after some time"})]})]}),e.jsx("p",{className:"note",children:"Memory trick: replication duplicates, sharding divides, CAP is the partition trade-off story."})]})]}),e.jsxs("div",{className:"bottomNote",children:[e.jsx("div",{className:"bnIcon",children:e.jsx(s,{})}),e.jsxs("div",{className:"bnText",children:[e.jsx("div",{className:"bnTitle",children:"Quick memory"}),e.jsx("div",{className:"bnSub",children:"Distributed databases scale using replication and sharding. During partitions, choose consistency or availability."})]})]})]})})]})};export{g as default};
