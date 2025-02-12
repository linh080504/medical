const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MedicalRecord", ()=> {
    let medical, user1, transactionResponse, transactionReceipt;
    beforeEach(async()=>{
        const accounts = await ethers.getSigners();
        user1 = accounts[1];
        const Medical = await ethers.getContractFactory("Medical");
        medical = await Medical.connect(user1).deploy();
    });
    describe("Deployed",()=>{
        it("The contract is deployed successfully", async()=>{
            expect(await medical.address).to.not.equal(0);
        })
    });
    describe("Add record", ()=>{
        beforeEach(async()=>{
            transactionResponse = await medical
            .connect(user1)
            .addRecord(
                "Wastron",
                22,
                "Male",
                "A positive",
                "Dengue",
                "Dengue",
                "Dengue"
            );
        transactionReceipt = await transactionResponse.wait();
        });
        it("Emits a add record event", async () => {
            const events = await medical.queryFilter(medical.filters.MedicalRecord_AddRecord());
            console.log("Filtered Events:", events);
        
            if (events.length === 0) {
                throw new Error("Không có sự kiện nào được tìm thấy bằng queryFilter.");
            }
        
            const event = events[0];
            console.log("Event Name:", event.fragment.name);
        
            expect(event.fragment.name).to.equal("MedicalRecord_AddRecord");
            const args = event .args;
            expect(args.timestamp).to.not.equal(0);
            expect(args.name).to.equal("Wastron");
            expect(args.age).to.equal(22);
            expect(args.gender).to.equal("Male");
            expect(args.bloodType).to.equal("A positive");
            expect(args.allergies).to.equal("Dengue");
            expect(args.diagnosis).to.equal("Dengue");
            expect(args.treatment).to.equal("Dengue");
        });  
        it("The getRecord function is working proberly or not", async()=>{
            const[
                timestamp, 
                name, 
                age, 
                gender, 
                bloodType,
                allergies, 
                diagnosis, 
                treatment
            ] = await medical.getRecord(1);
            expect(await medical.getRecordId()).to.be.equal(1);
            expect(timestamp).to.not.equal(0);
            expect(name).to.equal("Wastron");
            expect(age).to.equal(22);
            expect(gender).to.equal("Male");
            expect(bloodType).to.equal("A positive");
            expect(allergies).to.equal("Dengue");
            expect(diagnosis).to.equal("Dengue");
            expect(treatment).to.equal("Dengue");
        }) ; 
    });
    describe("Delete",()=>{
        beforeEach(async()=>{
            transactionResponse = await medical
        .connect(user1)
        .addRecord(
            "Wastron",
            22,
            "Male",
            "A positive",
            "Dengue",
            "Dengue",
            "Dengue"
        );
        transactionReceipt = await transactionResponse.wait();
        transactionResponse = await medical.connect(user1).deleteRecord(1);
        transactionReceipt = await transactionResponse.wait();
        });
        it("The delete is presnet int the isdelete mapping", async() => {
            expect(await medical.getDeleted(1)).to.be.equal(true);
        });
        it("It emits a delete event or not", async () => {
            const events = await medical.queryFilter(medical.filters.MedicalRecord_DeleteRecord());
            console.log("Filtered Events:", events);
        
            if (events.length === 0) {
                throw new Error("Không có sự kiện nào được tìm thấy bằng queryFilter.");
            }
        
            const event = events[0];
            console.log("Event Name:", event.fragment.name);
        
            expect(event.fragment.name).to.equal("MedicalRecord_DeleteRecord");
            const args = event.args;
            expect(args.timestamp).to.not.equal(0);
            expect(args.name).to.equal("Wastron");
            expect(args.age).to.equal(22);
            expect(args.gender).to.equal("Male");
            expect(args.bloodType).to.equal("A positive");
            expect(args.allergies).to.equal("Dengue");
            expect(args.diagnosis).to.equal("Dengue");
            expect(args.treatment).to.equal("Dengue");
        });        
    });
});