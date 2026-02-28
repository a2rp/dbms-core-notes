// App.jsx
import React from "react";
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

const App = () => {
    return (
        <Styled.Wrapper>
            <Styled.Header>
                <Header />
            </Styled.Header>
            <Styled.Main>
                <div className="contentWrapper">
                    <AboutDbms />

                    <DatabaseFundamentals />
                    <DataModels />
                    <ErModel />
                    <RelationalModel />
                    <SqlBasics />
                    <SqlQueryingEssentials />
                    <JoinsAndSubqueries />
                    <Constraints />
                    <Normalization />
                    <TransactionsAndConcurrency />
                    <Indexing />
                    <StorageAndArchitecture />
                    <QueryProcessingOptimization />
                    <NoSqlBasics />
                    <DistributedDatabases />
                    <SecurityInDbms />
                    <BackupAndRecovery />
                </div>

                <div className="footerWrapper">
                    <Footer />
                </div>
            </Styled.Main>
        </Styled.Wrapper>
    );
};

export default App;
