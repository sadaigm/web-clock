export const WEB_CLOCKS = 'web_clocks';
export const addWidgetEntry = (widget: any,widgets:Array<any>) => {
    if(widgets && Array.isArray(widgets)){
        widgets.push(widget);
    }
    else{
        widgets = [];
        widgets.push(widget);
    }
    publishWidget(widgets);
    return widgets;
}

export const removeWidgetEntry = (widget: any,widgets:Array<any>) => {
    if(widgets && Array.isArray(widgets)){
        widgets = widgets.filter(w => widget.id !== w.id);
    }
    else{
        console.error("widgets are empty");
        widgets = [];
    }
    publishWidget(widgets);
    return widgets;
}

export const publishWidget = (widgets:Array<any>) => {
    localStorage.setItem(WEB_CLOCKS, JSON.stringify(widgets));
}

export const getWidgets = () => {    
    const items = localStorage.getItem(WEB_CLOCKS);
    return items?JSON.parse(items):[];
}
export const removeWidgets = () => {
    localStorage.removeItem(WEB_CLOCKS);
    return [];
}
