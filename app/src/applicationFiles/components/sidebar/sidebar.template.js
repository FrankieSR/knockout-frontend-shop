define(() => {
    return `<div class="sidebar">
                <p>You choosed:</p>
                <div class = "sidebar__min-price">
                    <input data-bind="value: inputValueMin">
                </div>
                <div class = "sidebar__max-price">
                    <input data-bind="value: inputValueMax">
                </div>
                <p> min-price <strong>$</strong><span data-bind = "text: inputValueMin"></span> & max-price <strong>$</strong><span data-bind = "text: inputValueMax"></span></p>
                <button data-bind = 'click: clickedSomeWhere'>Filter price</button>
            </div>`
});