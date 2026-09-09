// App.jsx
import React, { useState } from "react";
import { Styled } from "./App.styled";
import Header from "./components/header";
import Footer from "./components/footer";
import AboutDbms from "./components/aboutDbms";
import DatabaseFundamentals from "./topics/databaseFundamentals";
import DataModels from "./topics/dataModels";
import ErModel from "./topics/erModel";
import RelationalModel from "./topics/relationalModel";
import SqlBasics from "./topics/sqlBasics";
import SqlQueryingEssentials from "./topics/sqlQueryingEssentials";
import JoinsAndSubqueries from "./topics/joinsAndSubqueries";
import Constraints from "./topics/constraints";
import Normalization from "./topics/normalization";
import TransactionsAndConcurrency from "./topics/transactionsAndConcurrency";
import Indexing from "./topics/indexing";
import StorageAndArchitecture from "./topics/storageAndArchitecture";
import QueryProcessingOptimization from "./topics/queryProcessingOptimization";
import NoSqlBasics from "./topics/nosqlBasics";
import DistributedDatabases from "./topics/distributedDatabases";
import SecurityInDbms from "./topics/securityInDbms";
import BackupAndRecovery from "./topics/backupAndRecovery";`r`nimport { FiBookOpen, FiDatabase, FiLayers, FiLock, FiSearch, FiServer, FiShare2, FiShield, FiZap } from "react-icons/fi";

const App = () => {`r`n    const [activeTopic, setActiveTopic] = useState("overview");`r`n    const mainRef = React.useRef(null);`r`n    const topics = [["overview", "Overview", <FiBookOpen />], ["databaseFundamentals", "Fundamentals", <FiDatabase />], ["dataModels", "Data models", <FiLayers />], ["erModel", "ER model", <FiShare2 />], ["relationalModel", "Relational model", <FiDatabase />], ["sqlBasics", "SQL basics", <FiSearch />], ["sqlQueryingEssentials", "SQL querying", <FiSearch />], ["joinsAndSubqueries", "Joins and subqueries", <FiLayers />], ["constraints", "Constraints", <FiShield />], ["normalization", "Normalization", <FiLayers />], ["transactionsAndConcurrency", "Transactions", <FiLock />], ["indexing", "Indexing", <FiZap />], ["storageAndArchitecture", "Storage and architecture", <FiServer />], ["queryProcessingOptimization", "Query optimization", <FiZap />], ["nosqlBasics", "NoSQL basics", <FiDatabase />], ["distributedDatabases", "Distributed databases", <FiShare2 />], ["securityInDbms", "Database security", <FiShield />], ["backupAndRecovery", "Backup and recovery", <FiServer />]];`r`n    const selectTopic = (key) => { setActiveTopic(key); mainRef.current?.scrollTo({ top: 0, left: 0, behavior: "smooth" }); };
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main ref={mainRef}>`r`n                <aside className="studyNav" aria-label="DBMS topics"><div className="studyNavLabel">Study guide</div><nav>{topics.map(([key, label, icon]) => <button key={key} type="button" className={activeTopic === key ? "active" : ""} onClick={() => selectTopic(key)}>{icon}<span>{label}</span></button>)}</nav><p>Select a topic to open its notes.</p></aside>
                <div className="contentWrapper">
                    {activeTopic === "overview" && <AboutDbms />}

                    <div className={	opicWrapper }><DatabaseFundamentals /></div>
                    <div className={	opicWrapper }><DataModels /></div>
                    <div className={	opicWrapper }><ErModel /></div>
                    <div className={	opicWrapper }><RelationalModel /></div>
                    <div className={	opicWrapper }><SqlBasics /></div>
                    <div className={	opicWrapper }><SqlQueryingEssentials /></div>
                    <div className={	opicWrapper }><JoinsAndSubqueries /></div>
                    <div className={	opicWrapper }><Constraints /></div>
                    <div className={	opicWrapper }><Normalization /></div>
                    <div className={	opicWrapper }><TransactionsAndConcurrency /></div>
                    <div className={	opicWrapper }><Indexing /></div>
                    <div className={	opicWrapper }><StorageAndArchitecture /></div>
                    <div className={	opicWrapper }><QueryProcessingOptimization /></div>
                    <div className={	opicWrapper }><NoSqlBasics /></div>
                    <div className={	opicWrapper }><DistributedDatabases /></div>
                    <div className={	opicWrapper }><SecurityInDbms /></div>
                    <div className={	opicWrapper }><BackupAndRecovery /></div>
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;


