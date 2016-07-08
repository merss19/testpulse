
  /*  $('select').select2({
        width: '100%'
    });*/

    $(document).ready(function() {
        $(".filter__box_type_service select").select2({
            width: '100%',
            maximumSelectionLength: 1
        });


        /*$('.filter__box_type_location select').select2({
            width: '100%'
        });*/

        $('.filter__box_type_location select').selectize({
            maxItems:3,
            delimiter: ','
        });

    });