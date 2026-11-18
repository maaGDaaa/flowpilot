const projectName =  "FlowPilot";
const invoiceAmount = 3500;
const approvalLimit = 2000;

console.log("welcome to", projectName);

if (invoiceAmount>approvalLimit){
    console.log("Manager approval required");
}else {
    console.log("No manager approval needed");
}