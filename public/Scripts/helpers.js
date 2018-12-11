$(document).ready(function () {

    // === ALERT === //
    showNotification = function (msg, error) {
        if (error) {
            $('#alertNotify > h4').removeClass('alert_success').addClass('alert_error').html(msg);
            $('#alertNotify').show();
        }
        else {
            $('#alertNotify > h4').removeClass('alert_error').addClass('alert_success').html(msg);
            $('#alertNotify').show();
            setTimeout(function () {
                $('#alertNotify').hide('fade');
            }, 3000);
        }
    }

    // === DATE PICKER === //
    initDatePicker = function (dp) {
        $('#' + dp).datepicker({
            todayBtn: "linked",
            orientation: "top right",
            autoclose: true,
            todayHighlight: true
        });
    }
    initDatePickerRange = function (from, to) {
        $('#' + from).datepicker({
            onClose: function (selectedDate) {
                $("#" + to).datepicker("option", "minDate", selectedDate);
            }
        });
        $('#' + to).datepicker({
            onClose: function (selectedDate) {
                $("#" + from).datepicker("option", "maxDate", selectedDate);
            }
        });
    }

    // === MODALS === //
    loadModal = function (modalId, title) {
        $("#" + modalId).on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget);
            $(this).find('.modal-title').text(title);
        });

        $('#' + modalId).modal('show');
    };
    loadModalWContent = function (modalId, title, content) {
        $("#" + modalId).on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget);
            $(this).find('.modal-title').text(title);
            $(this).find('.modal-body').text(content);
        });

        $('#' + modalId).modal('show');
    };
    loadModalConfirm = function (modalId, title, content, link, id, jqGridId, successMsg) {
        $("#" + modalId).on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget);
            $(this).find('.modal-title').text(title);
            $(this).find('.modal-body').text(content);
        });

        $('#' + modalId).modal({
            backdrop: 'static',
            keyboard: false
        }).on('click', '#btnConfirm', function (e) {
            $.ajax({
                url: link,
                type: "POST",
                data: { 'id': id },
                success: function () {
                    loadModalWContent('notifyModalSuccess', 'Information', 'User Details Saved.');
                    $("#" + jqGridId).jqGrid('setGridParam', { datatype: 'json' }).trigger('reloadGrid');
                }
            });
        });
    };


    loadModalConfirmMP = function (modalId, title, content) {
        $("#" + modalId).on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget);
            $(this).find('.modal-title').text(title);
            $(this).find('.modal-body').text(content);
        });

        $('#' + modalId).modal({
            backdrop: 'static',
            keyboard: false
        }).one('click', '#btnConfirm', function (e) {
                     SaveDataMP();

        }).on('click', '#btnDisable', function () {
            loadModalWContent("notifyModalWarning", "Information", "Data not Saved");
            btnGenerateData_OnClick();
        });
    };




    loadModalWYesNo = function (modalId, title, content, month, year, value, format, nameOfModule, link, id, jqGridId, successMsg) {
        $("#" + modalId).on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget);
            $(this).find('.modal-title').text(title);
            $(this).find('.modal-body').text(content);
        });

        $('#' + modalId).modal({
            backdrop: 'static',
            keyboard: false
        }).on('click', '#btnConfirm3', function (e) {

            //allocation of import expense
            if (nameOfModule == "AllocationOfImportExpense")
            {
                if (format == "excel") {
                    ////selectMonthGD(Dropdown ID)
                    var AllocofImportExpMonth = month;
                    ////selectYearGD(Dropdown ID)
                    var AllocofImportExpYear = year;

                  //  var mValue = value;

                    loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download Please wait....');
                    window.location = '../../Reports/AllocofImportExp/GenerateAllocofImportExp?Month=' + month + '&Year=' + year + '&mValue=' + value;

                    setTimeout(function () { loadModalShowHide('notifyModalSuccess', 'Information', 'hide'); }, 2000);

                }
                else if (format == "pdf") {

                    ////selectMonthGD(Dropdown ID)
                    var AllocofImportExpMonth = month;
                    ////selectYearGD(Dropdown ID)
                    var AllocofImportExpYear = year;

                  //  var mValue = value;


                  //  loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download Please wait....');
                    window.location = '../../Reports/AllocofImportExp/GenerateAllocofImportExpPDF?Month=' + month + '&Year=' + year + '&mValue=' + value;
                  //  setTimeout(function () { loadModalShowHide('notifyModalSuccess', 'Information', 'hide'); }, 2000);


                }


            }

            //Allocation of Cost Variance
            if (nameOfModule == "AllocationOfCostVariance") {
                if (format == "excel") {
                    //loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download Please wait....');
                    window.location = '../../Reports/AllocOfCostVariance/GenerateAllocofCostVariance?Month=' + month + '&Year=' + year + '&mValue=' + value;

                    // setTimeout(function () { loadModalShowHide('notifyModalSuccess', 'Information', 'hide'); }, 2000);

                }
                else if (format == "pdf") {
                  //  loadModalWContent('notifyModalSuccess', 'Information', 'PDF File Download Please wait....');
                    window.location ='../../Reports/AllocofCostVariance/GenerateAllocofCostVariancePDF?Month=' + month + '&Year=' + year + '&mValue=' + value, '_blank';
                }
            }

            if (nameOfModule == "COGSAnalysis") {
                if (format == "excel") {
                    //loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download Please wait....');
                    window.location = '../../Reports/COGSAnalysis/GenerateCOGSAnalysisExcel?COGSAnalysisMonth=' + month + '&COGSAnalysisYear=' + year + '&mValue=' + value;

                   // setTimeout(function () { loadModalShowHide('notifyModalSuccess', 'Information', 'hide'); }, 2000);

                }
                else if (format == "pdf") {
                   // loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download Please wait....');
                    window.location = '../../Reports/COGSAnalysis/GenerateCOGSAnalysisPDF?COGSAnalysisMonth=' + month + '&COGSAnalysisYear=' + year + '&mValue=' + value;
                }
            }

            if (nameOfModule == "finishedGoods") {
                if (format == "excel") {
                    //loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download Please wait....');
                    window.location = '../../Reports/FinishedGoods/GenerateFinishedGoodsExcel?FinishedGoodsMonth=' + month + '&FinishedGoodsYear=' + year + '&mValue=' + value;

                    // setTimeout(function () { loadModalShowHide('notifyModalSuccess', 'Information', 'hide'); }, 2000);

                }
                else if (format == "pdf") {
                    //loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download Please wait....');
                    window.location = '../../Reports/FinishedGoods/GenerateFinishedGoodsPDF?FinishedGoodsMonth=' + month + '&FinishedGoodsYear=' + year + '&mValue=' + value;

                }
            }


            if (nameOfModule == "WorkingPaper") {
                if (format == "excel") {
                    //loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download Please wait....');
                   // window.location.href = '../../Reports/FinishedGoods/GenerateFinishedGoodsExcel?FinishedGoodsMonth=' + month + '&FinishedGoodsYear=' + year + '&mValue=' + value;
                    window.location = '../../Reports/WorkingPaper/GenerateWorkingPaperExcel?WPMonth=' + month + '&WPYear=' + year + '&mValue=' + value;

                    // setTimeout(function () { loadModalShowHide('notifyModalSuccess', 'Information', 'hide'); }, 2000);

                }
                else if (format == "pdf") {
                    //loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download Please wait....');
                   // window.location.href('../../Reports/FinishedGoods/GenerateFinishedGoodsPDF?FinishedGoodsMonth=' + month + '&FinishedGoodsYear=' + year + '&mValue=' + value)
                    window.location = '../../Reports/WorkingPaper/GenerateWorkingPaperPDF?WPMonth=' + month + '&WPYear=' + year + '&mValue=' + value, '_blank';

                }
            }



            //Journal Voucher
            if (nameOfModule == "JournalVoucher") {
                if (format == "excel") {
                    ////selectMonthGD(Dropdown ID)
                    var AllocofImportExpMonth = month;
                    ////selectYearGD(Dropdown ID)
                    var AllocofImportExpYear = year;

                    var mValue = value;


                    loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download Please wait....');
                    window.location.href = '../../Reports/JournalVoucher/GenerateJournalVoucher?Year=' + year + '&Month=' + month;

                    //setTimeout(function () { loadModalShowHide('notifyModalSuccess', 'Information', 'hide'); }, 2000);

                }
                else if (format == "pdf") {

                    ////selectMonthGD(Dropdown ID)
                    var AllocofImportExpMonth = month;
                    ////selectYearGD(Dropdown ID)
                    var AllocofImportExpYear = year;

                    var mValue = value;


                    loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download Please wait....');
                    window.location.href = '../../Reports/JournalVoucher/GenerateJournalVoucherPDF?Year=' + year + '&Month=' + month;


                }


            }



            //Cost of goods
            if (nameOfModule == "CostOfGoods") {
                if (format == "excel") {
                    ////selectMonthGD(Dropdown ID)
                    var AllocofImportExpMonth = month;
                    ////selectYearGD(Dropdown ID)
                    var AllocofImportExpYear = year;

                    var mValue = value;


                    loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download');
                    window.location = '../../Reports/CostOfGoodsSold/GenerateCostOfGoodsSold?Year=' + year + '&Month=' + month;
                    setTimeout(function () { loadModalShowHide('notifyModalSuccess', 'Information', 'hide'); }, 2000);

                }
                else if (format == "pdf") {

                    ////selectMonthGD(Dropdown ID)
                    var AllocofImportExpMonth = month;
                    ////selectYearGD(Dropdown ID)
                    var AllocofImportExpYear = year;

                    var mValue = value;

                    loadModalWContent('notifyModalSuccess', 'Information', 'PDF File Download');
                    window.location = '../../Reports/CostOfGoodsSold/GenerateCostOfGoodsSoldPDF?Year=' + year + '&Month=' + month;
                    setTimeout(function () { loadModalShowHide('notifyModalSuccess', 'Information', 'hide'); }, 2000);
                    

                }


            }



            //Work In Process
            if (nameOfModule == "WorkInProcess") {
                if (format == "excel") {
                    ////selectMonthGD(Dropdown ID)
                    var WorkInProcessMonth = month;
                    ////selectYearGD(Dropdown ID)
                    var WorkInProcessYear = year;

                    var mValue = value;


                    loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download');
                    window.location = '../../Reports/WorkInProcess/GenerateWorkInProcessExcel?WorkInProcessMonth=' + WorkInProcessMonth + '&WorkInProcessYear=' + WorkInProcessYear + '&mValue=' + mValue;
                    setTimeout(function () { loadModalShowHide('notifyModalSuccess', 'Information', 'hide'); }, 2000);  ////if (returndata.data.Is_Locked != null) {

                }
                else if (format == "pdf") {

                    ////selectMonthGD(Dropdown ID)
                    var WorkInProcessMonth = month;
                    ////selectYearGD(Dropdown ID)
                    var WorkInProcessYear = year;

                    var mValue = value;

                    loadModalWContent('notifyModalSuccess', 'Information', 'PDF File Download');
                    window.location = '../../Reports/WorkInProcess/GenerateWorkInProcessPDF?WorkInProcessMonth=' + WorkInProcessMonth + '&WorkInProcessYear=' + WorkInProcessYear + '&mValue=' + mValue;
                    setTimeout(function () { loadModalShowHide('notifyModalSuccess', 'Information', 'hide'); }, 2000);  ////if (returndata.data.Is_Locked != null) {


                }


            }


            if (nameOfModule == "Summary") {
                if (format == "excel") {
                    //loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download Please wait....');
                    window.location = '../../Reports/Summary/GenerateSummaryExcel?SummaryMonth=' + month + '&SummaryYear=' + year + '&mValue=' + value;

                    // setTimeout(function () { loadModalShowHide('notifyModalSuccess', 'Information', 'hide'); }, 2000);

                }
                else if (format == "pdf") {
                    //  loadModalWContent('notifyModalSuccess', 'Information', 'PDF File Download Please wait....');
                    window.location = '../../Reports/Summary/GenerateSummaryPDF?SummaryMonth=' + month + '&SummaryYear=' + year + '&mValue=' + value, '_blank';
                }
            }


            if (nameOfModule == "RejectedParts") {
                if (format == "excel") {
                    //loadModalWContent('notifyModalSuccess', 'Information', 'Excel File Download Please wait....');
                    window.location = '../../Reports/RejectedParts/GenerateRejectedParts?Month=' + month + '&Year=' + year + '&mValue=' + value;

                    // setTimeout(function () { loadModalShowHide('notifyModalSuccess', 'Information', 'hide'); }, 2000);

                }
                else if (format == "pdf") {
                    //  loadModalWContent('notifyModalSuccess', 'Information', 'PDF File Download Please wait....');
                    window.location = '../../Reports/RejectedParts/GenerateReportPDF?Month=' + month + '&Year=' + year + '&mValue=' + value;
                }
            }

            
           

        });
    }


 




    loadModalConfirmLock = function (modalId, title, content, excelID, link, month,year,mValue) {
        $("#" + modalId).on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget);
            $(this).find('.modal-title').text(title);
            $(this).find('.modal-body').text(content);
        });

        $('#' + modalId).modal({
            backdrop: 'static',
            keyboard: false
        }).on('click', '#btnConfirm', function () {
            document.getElementById(excelID).disabled = true;
            $.ajax({
                url: link,
                type: "POST",
                data: { 'Month': month, 'Year': year, 'mValue': mValue, 'Function' : 'lock' },
                success: function (returnData) {
                    if(returnData.ok){
                        loadModalWContent('notifyModalSuccess', 'Information', 'Report Successfully Locked.');
                    }
                    else{
                        loadModalWContent('notifyModalError', 'Error', '');
                    }
                }
            });
        }).on('click', '#btnDisable', function () {
            document.getElementById(excelID).disabled = false;
            $.ajax({
                url: link,
                type: "POST",
                data: { 'Month': month, 'Year': year, 'mValue': mValue, 'Function': 'unlock'},
                success: function (returnData) {
                    if(returnData.ok){
                        loadModalWContent('notifyModalSuccess', 'Information', 'Report Successfully Unlocked.');
                    }
                    else{
                        loadModalWContent('notifyModalError', 'Error', '');
                    }
                }
            });
        });
    };





    loadModalShowHide = function (modalId, title, visibility) {
        $("#" + modalId).on('show.bs.modal', function (event) {
            var button = $(event.relatedTarget);
            $(this).find('.modal-title').text(title);
        });

        $('#' + modalId).modal(visibility);
    };

    // === BIND DROPDOWNS === //
    BindDropdownList = function (id, url) {
        var select = $('#' + id);

        $.ajax({
            async: true,
            type: "POST",
            cache: false,
            url: url,
            data: {},
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (returndata) {
                select.empty();
                select.append($('<option></option>').val(0).html("Select..."));
                if (returndata.ok) {
                    $.each(returndata.data, function (index, itemData) {
                        select.append($('<option></option>').val(itemData.value).html(itemData.text));
                    });
                }
            }
        });
    }
    BindDropdownListWithInitial = function (id, url, initValue) {
        var select = $('#' + id);

        $.ajax({
            async: false,
            type: "POST",
            cache: false,
            url: url,
            data: {},
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (returndata) {
                select.empty();
                select.append($('<option></option>').val(0).html(initValue));
                if (returndata.ok) {
                    $.each(returndata.data, function (index, itemData) {
                        select.append($('<option></option>').val(itemData.value).html(itemData.text));
                    });
                }
            }
        });
    }
    BindDropdownListWithInitialNotAsync = function (id, url, initValue) {
        var select = $('#' + id);

        $.ajax({
            async: false,
            type: "POST",
            cache: false,
            url: url,
            data: {},
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (returndata) {
                select.empty();
                select.append($('<option></option>').val(0).html(initValue));
                if (returndata.ok) {
                    $.each(returndata.data, function (index, itemData) {
                        select.append($('<option></option>').val(itemData.value).html(itemData.text));
                    });
                }

            }
        });
    }
    BindDropdownListWParam = function (id, url, val, initValue) {
        var select = $('#' + id);

        $.ajax({
            async: false,
            type: "POST",
            cache: false,
            url: url,
            data: JSON.stringify(val),
            contentType: "application/json; charset=utf-8",
            dataType: "json",

            success: function (returndata) {
                select.empty();

                if (returndata.ok) {
                    select.append($('<option></option>').val(0).html(initValue));
                    $.each(returndata.data, function (index, itemData) {
                        select.append($('<option></option>').val(itemData.value).html(itemData.text));
                    });
                }
            }
        });
    }
    BindDropdownListWithInitialWOID = function (id, url, initValue) {
        var select = $('#' + id);

        $.ajax({
            async: true,
            type: "POST",
            cache: false,
            url: url,
            data: {},
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (returndata) {
                select.empty();
                select.append($('<option></option>').val(0).html(initValue));
                if (returndata.ok) {
                    $.each(returndata.data, function (index, itemData) {
                        select.append($('<option></option>').val(itemData).html(itemData));
                    });
                }
            }
        });
    }
    BindDropdownListWParamValue = function (id, url, val) {
        var select = $('#' + id);

        $.ajax({
            url: url,
            datatype: "json",
            data: { Value: val },
            mtype: 'POST',
            error: function (request, error) {
                console.log(error);
            },
            success: function (returndata) {
                select.empty();
                if (returndata.ok) {
                    select.append($('<option></option>').val(0).html('Select...'));
                    $.each(returndata.data, function (index, itemData) {
                        select.append($('<option></option>').val(itemData.value).html(itemData.text));
                        //console.log(returndata);
                    });
                }

                if (select.find('option').length <= 1) {

                    //select.append($('<option></option>').val(0).html('No Record Found!'));
                }
            }
        });
    }
});