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
import BackupAndRecovery from "./topics/backupAndRecovery";
import { FiBookOpen, FiDatabase, FiLayers, FiLock, FiSearch, FiServer, FiShare2, FiShield, FiZap } from "react-icons/fi";

const App = () => {
    const [activeTopic, setActiveTopic] = useState("overview");
    const mainRef = React.useRef(null);
    const topics = [["overview", "Overview", <FiBookOpen />], ["databaseFundamentals", "Fundamentals", <FiDatabase />], ["dataModels", "Data models", <FiLayers />], ["erModel", "ER model", <FiShare2 />], ["relationalModel", "Relational model", <FiDatabase />], ["sqlBasics", "SQL basics", <FiSearch />], ["sqlQueryingEssentials", "SQL querying", <FiSearch />], ["joinsAndSubqueries", "Joins and subqueries", <FiLayers />], ["constraints", "Constraints", <FiShield />], ["normalization", "Normalization", <FiLayers />], ["transactionsAndConcurrency", "Transactions", <FiLock />], ["indexing", "Indexing", <FiZap />], ["storageAndArchitecture", "Storage and architecture", <FiServer />], ["queryProcessingOptimization", "Query optimization", <FiZap />], ["nosqlBasics", "NoSQL basics", <FiDatabase />], ["distributedDatabases", "Distributed databases", <FiShare2 />], ["securityInDbms", "Database security", <FiShield />], ["backupAndRecovery", "Backup and recovery", <FiServer />]];
    const selectTopic = (key) => { setActiveTopic(key); mainRef.current?.scrollTo({ top: 0, left: 0, behavior: "smooth" }); };
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main ref={mainRef}>
                <aside className="studyNav" aria-label="DBMS topics"><div className="studyNavLabel">Study guide</div><nav>{topics.map(([key, label, icon]) => <button key={key} type="button" className={activeTopic === key ? "active" : ""} onClick={() => selectTopic(key)}>{icon}<span>{label}</span></button>)}</nav><p>Select a topic to open its notes.</p></aside>
                <div className="contentWrapper">
                    {activeTopic === "overview" && <AboutDbms />}

                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><DatabaseFundamentals /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><DataModels /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><ErModel /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><RelationalModel /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><SqlBasics /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><SqlQueryingEssentials /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><JoinsAndSubqueries /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><Constraints /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><Normalization /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><TransactionsAndConcurrency /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><Indexing /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><StorageAndArchitecture /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><QueryProcessingOptimization /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><NoSqlBasics /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><DistributedDatabases /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><SecurityInDbms /></div>
                    <div className={`topicWrapper ${activeTopic === "databaseFundamentals" ? "activeTopic" : ""}`}><BackupAndRecovery /></div>
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;




