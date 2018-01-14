define_ibex_controller({
    name: "VraagX",

    jqueryWidget: {
        _init: function () {
            this.options.transfer = null; // Remove 'click to continue message'.         
            this.element.VBox({
                options: this.options,
                triggers: [1],
                children: [
                    "Bericht", this.options,
                    "Vraag", this.options,
                ]
            });
        }
    },

    properties: { }
});