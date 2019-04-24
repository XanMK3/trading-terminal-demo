export default {
    type: 'row',
    id: '1',
    children: [
        {
            type: 'row',
            id: '2',
            weight: 75,
            children: [
                {
                    type: 'tabset',
                    id: '3',
                    weight: 50,
                    children: [{
                        type: 'tab',
                        id: '4',
                        name: 'Quotes',
                        component: 'quotes',
                    }],
                },
                {
                    type: 'tabset',
                    id: '5',
                    weight: 50,
                    children: [{
                        type: 'tab',
                        id: '6',
                        name: 'Chart',
                        component: 'chart',
                    }],
                },
            ],
        },
        {
            type: 'tabset',
            id: '7',
            weight: 25,
            children: [
                {
                    type: 'tab',
                    id: '8',
                    name: 'News',
                    component: 'news',
                },
            ],
        },
    ],
};
