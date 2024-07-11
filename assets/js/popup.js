<script>
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.btn.an_btn').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            var idx = this.getAttribute('data-idx');
            document.querySelectorAll('.account_pop').forEach(function(pop) {
                if (pop.getAttribute('data-idx') === idx) {
                    pop.style.display = 'block';
                } else {
                    pop.style.display = 'none';
                }
            });
        });
    });

    document.querySelectorAll('.btn.close').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            this.closest('.account_pop').style.display = 'none';
        });
    });

    document.querySelectorAll('.pop_mask').forEach(function(mask) {
        mask.addEventListener('click', function() {
            this.closest('.account_pop').style.display = 'none';
        });
    });
});
</script>
