// Селектор места, куда вставить телефон(ны). Например: .phone или #phone
// Если мест несколько, укажите селекторы через запятую
const selector = '.phone, .phone-1>h2';

// Телефоны по умолчанию
const defaultPhones = [
    "+38(098) 745-26-16",
    "+38(098) 123-45-67",
    "+38(050) 123-45-67"
];

// ---- Первый источник ----
// Пропишите название источника трафика utm_source
const firstSource = 'google';

// Телефоны для firstSource
const firstPhones = [
    "+380Google",
    "+380Google",
    "+380Google"
    ];


// ---- Второй источник ----
// Пропишите название источника трафика utm_source
const secondSource = 'facebook';   

//  Телефоны для secondSource
const secondPhones = [
    "+380Facebook",
    "+380Facebook",
    "+380Facebook"
];


// ---- Третий источник ----
// Пропишите название источника трафика utm_source
const thirdSource = '';  

//  Телефоны для thirdSource
const thirdPhones = [
    "",
    "",
    ""
]

export { defaultPhones, firstPhones, secondPhones, firstSource, secondSource, thirdSource, thirdPhones, selector};