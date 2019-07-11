        function calculate() {
            var values = document.getElementById('box').value.split(/,/g);
            var sum = values.reduce(function(a, b) { return parseInt(a) + parseInt(b); });
            document.getElementById('max').innerHTML = values.max();
            document.getElementById('min').innerHTML = values.min();
            document.getElementById('sum').innerHTML = sum;
            document.getElementById('avg').innerHTML = sum / values.length;
            document.getElementById('rev').innerHTML = values.reverse().join(',');
        }
        Array.prototype.max = function() {
            return Math.max.apply(null, this);
        };

        Array.prototype.min = function() {
            return Math.min.apply(null, this);
        };