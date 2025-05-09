/****************************************
 *         Table Responsive             *
 ****************************************/
$(function () {
  $("#config-table").DataTable({
    responsive: true,
  });
});

/****************************************
 *       Basic Table                   *
 ****************************************/
$("#zero_config").DataTable();

/****************************************
 *       Default Order Table           *
 ****************************************/
$("#default_order").DataTable({
  order: [[3, "desc"]],
});

/****************************************
 *       Multi-column Order Table      *
 ****************************************/
const table = $("#multi_col_order").DataTable({
  columnDefs: [
    {
      targets: [0],
      orderData: [0, 1],
    },
    {
      targets: [1],
      orderData: [1, 0],
    },
    {
      targets: [3],
      orderData: [3, 0],
    },
  ],
  ...($("#multi_col_order").hasClass("reorder-table") ? {
    pageLength: 5,
    lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]]
  }
    : {} //  Empty object if the class is not present, so it does not override other settings
  )
});

const wrapper = $('<div class="dt-top-controls"></div>');
  wrapper.append($('#multi_col_order_length')).append($('#multi_col_order_filter'));
  $('#multi_col_order_wrapper').prepend(wrapper);
/****************************************
 *       Complex header Table          *
 ****************************************/
$("#complex_header").DataTable();

/****************************************
 *       DOM positioning Table         *
 ****************************************/
$("#DOM_pos").DataTable({
  dom: '<"top"i>rt<"bottom"flp><"clear">',
});

/****************************************
 *     alternative pagination Table    *
 ****************************************/
$("#alt_pagination").DataTable({
  pagingType: "full_numbers",
});

/****************************************
 *     vertical scroll Table    *
 ****************************************/
$("#scroll_ver").DataTable({
  scrollY: "300px",
  scrollCollapse: true,
  paging: false,
});

/****************************************
 * vertical scroll,dynamic height Table *
 ****************************************/
$("#scroll_ver_dynamic_hei").DataTable({
  scrollY: "50vh",
  scrollCollapse: true,
  paging: false,
});

/****************************************
 *     horizontal scroll Table    *
 ****************************************/
$("#scroll_hor").DataTable({
  scrollX: true,
});

/****************************************
 * vertical & horizontal scroll Table  *
 ****************************************/
$("#scroll_ver_hor").DataTable({
  scrollY: 300,
  scrollX: true,
});

/****************************************
 * Language - Comma decimal place Table  *
 ****************************************/
$("#lang_comma_deci").DataTable({
  language: {
    decimal: ",",
    thousands: ".",
  },
});

/****************************************
 *         Language options Table      *
 ****************************************/
$("#lang_opt").DataTable({
  language: {
    lengthMenu: "Display _MENU_ records per page",
    zeroRecords: "Nothing found - sorry",
    info: "Showing page _PAGE_ of _PAGES_",
    infoEmpty: "No records available",
    infoFiltered: "(filtered from _MAX_ total records)",
  },
});

$(".reordered-table").DataTable({
  pageLength: 5,
  lengthMenu: [[5, 10, 25, 50, -1], [5, 10, 25, 50, "All"]]
})

/*--------------------------------------*/
/*-------- Placeholder------------------*/
/*--------------------------------------*/


const dataTablesFilter = document.getElementById('multi_col_order_filter')
const inputField = dataTablesFilter.querySelector('input');
inputField.setAttribute('placeholder', "Enter search...")
inputField.classList.add('filter-input');