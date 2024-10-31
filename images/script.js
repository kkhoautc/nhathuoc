const form = document.querySelector("form");


function checkNull(txt) {
    if(txt.value.length==0)
		return true;
	else
		return false;
}

function validateGmail(email) {
    const gmailPattern = /^[^\s@]+@gmail\.com$/;
    return gmailPattern.test(email);
}

document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault(); 

    if (checkNull(form.email)) {
        alert("Email không được để trống.");
        form.email.focus();
        return false;
    }
    if (!validateGmail(form.email.value)) {
        alert("Email phải đúng định dạng.");
        form.email.focus();
        return false;
    }

    if (checkNull(form.com)) {
        alert("Comment không được để trống.");
        form.com.focus();
        return false;
    }

    if (checkNull(form.rate)) {
        alert("Rate không được để trống.");
        form.rate.focus();
        return false;
    }

    const input = document.getElementById('rate').value;
    if (!Number.isInteger(Number(input))) {
        alert("Ratee Không Hợp Lệ");
        form.rate.focus();
        return false;
    }

    alert("submit thanh cong");
});