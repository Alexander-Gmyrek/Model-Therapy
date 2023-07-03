document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message. We will get back to you soon.');
});

window.addEventListener('DOMContentLoaded', (event) => {
    const ribbons = document.querySelectorAll('.ribbon');

    ribbons.forEach((ribbon, index) => {
        const svg = d3.select(ribbon)
            .append('svg')
            .attr('viewBox', '0 0 500 150')
            .attr('preserveAspectRatio', 'none')
            .style('width', '100%')
            .style('height', '100%');

        //const color = d3.scaleOrdinal(d3.schemeCategory10);

        const area = d3.area()
            .x(function(d, i) { return i * 500 / 10; })
            .y0(150)
            .y1(function(d) { return 150 - d; })
            .curve(d3.curveBasis);

        svg.append('path')
            .datum(d3.range(11).map(function() { return Math.random() * 100; }))
            .attr('fill', ribbon.getAttribute('dataColor'))
            .attr('d', area);
        
    });
});