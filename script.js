let expenses=[];
let totalamount=0;

const categoryInput=document.getElementById('category');
const amountInput=document.getElementById('amount');
const dateInput=document.getElementById('date');
const addbuttonInput=document.getElementById('add');

const expensetablebody=document.getElementById('expense-table-body');
const totalamountcell=document.getElementById('total-amount');

addbuttonInput.addEventListener('click', function(){
    const categoryInputcell=categoryInput.value;
    const amountInputcell=Number(amountInput.value);
    const dateInputcell=dateInput.value;

    if(categoryInputcell==''||amountInputcell<=0||dateInputcell==''){
        alert('please fill all the areas correctly');
        return;
    };

    const expense={ categoryInputcell,amountInputcell,dateInputcell};
    expenses.push(expense);


    totalamount+=amountInputcell;
    totalamountcell.textContent=totalamount;

    const newrow=expensetablebody.insertRow();

    const categorycell=newrow.insertCell();
    const amountcell=newrow.insertCell();
    const datecell=newrow.insertCell();
    const deletecell=newrow.insertCell();

    categorycell.textContent=expense.categoryInputcell;
    amountcell.textContent=expense.amountInputcell;
    datecell.textContent=expense.dateInputcell; 

    const deletebtn=document.createElement('button');
    deletebtn.textContent='D';

    deletebtn.className='delete-btn';

    deletebtn.addEventListener('click', function(){
        expenses.splice(expenses.indexOf(expense),1);
        totalamount-=amountInputcell;
        totalamountcell.textContent=totalamount;
        expensetablebody.removeChild(newrow);
        
    });
    deletecell.appendChild(deletebtn);
});