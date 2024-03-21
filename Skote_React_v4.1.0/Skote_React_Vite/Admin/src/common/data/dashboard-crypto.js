// img
import img1 from "../../assets/images/companies/img-1.png";
import img2 from "../../assets/images/companies/img-2.png";
import img3 from "../../assets/images/companies/img-3.png";

const marchWalletData = {
    chartdata: [76, 67, 61],
    availablebalance: 6134.39,
    income: 2632.46,
    Expense: 924.38,
    Ethereum: {
        ETH: 4.5701,
        Dollar: 1123.64
    },
    Bitcoin: {
        BTC: 0.4412,
        Dollar: 4025.32
    },
    Litecoin: {
        LTC: 35.3811,
        Dollar: 2263.09
    }
}

const febWalletData = {
    chartdata: [65, 56, 47],
    availablebalance: 5296.39,
    income: 4126.12,
    Expense: 568.49,
    Ethereum: {
        ETH: 5.6781,
        Dollar: 958.52
    },
    Bitcoin: {
        BTC: 1.5269,
        Dollar: 5239.16
    },
    Litecoin: {
        LTC: 49.5987,
        Dollar: 3698.13
    }
}

const janWalletData = {
    chartdata: [84, 53, 49],
    availablebalance: 9575.39,
    income: 5749.46,
    Expense: 1698.38,
    Ethereum: {
        ETH: 1.5236,
        Dollar: 1123.64
    },
    Bitcoin: {
        BTC: 0.4412,
        Dollar: 2968.29
    },
    Litecoin: {
        LTC: 17.4169,
        Dollar: 1169.47
    }
};

const decWalletData = {
    chartdata: [72, 67, 51],
    availablebalance: 6134.39,
    income: 2698.46,
    Expense: 845.38,
    Ethereum: {
        ETH: 7.5698,
        Dollar: 3657.19
    },
    Bitcoin: {
        BTC: 2.8527,
        Dollar: 7459.62
    },
    Litecoin: {
        LTC: 43.4985,
        Dollar: 4789.93
    }
};

const transactionsDataALL = [
    {
        id: 1,
        icon: "bx-down-arrow-circle",
        color: "primary",
        type: "Buy",
        currency: "BTC",
        date: "14 Mar, 2020",
        amount: "0.016 BTC",
        price: "$125.20"
    },
    {
        id: 2,
        icon: "bx-up-arrow-circle",
        color: "danger",
        type: "Sell",
        currency: "ETH",
        date: "15 Mar, 2020",
        amount: "0.56 ETH",
        price: "$112.34"
    },
    {
        id: 3,
        icon: "bx-down-arrow-circle",
        color: "primary",
        type: "Buy",
        currency: "LTC",
        date: "16 Mar, 2020",
        amount: "1.88 LTC",
        price: "$94.22"
    },
    {
        id: 4,
        icon: "bx-down-arrow-circle",
        color: "primary",
        type: "Buy",
        currency: "ETH",
        date: "17 Mar, 2020",
        amount: "0.42 ETH",
        price: "$84.32"
    },
    {
        id: 5,
        icon: "bx-up-arrow-circle",
        color: "danger",
        type: "Sell",
        currency: "BTC",
        date: "18 Mar, 2020",
        amount: "0.018 BTC",
        price: "$145.80"
    },
    {
        id: 6,
        icon: "bx-down-arrow-circle",
        color: "primary",
        type: "Buy",
        currency: "BTC",
        date: "14 Mar, 2020",
        amount: "0.016 BTC",
        price: "$125.20"
    },
    {
        id: 7,
        icon: "bx-up-arrow-circle",
        color: "danger",
        type: "Sell",
        currency: "ETH",
        date: "15 Mar, 2020",
        amount: "0.56 ETH",
        price: "$112.34"
    }
]
const transactionsDataBuy = [
    {
        id: 1,
        icon: "bx-up-arrow-circle",
        color: "danger",
        type: "Sell",
        currency: "ETH",
        date: "15 Mar, 2020",
        amount: "0.56 ETH",
        price: "$112.34"
    },
    {
        id: 2,
        icon: "bx-down-arrow-circle",
        color: "primary",
        type: "Buy",
        currency: "BTC",
        date: "14 Mar, 2020",
        amount: "0.016 BTC",
        price: "$125.20"
    },
    {
        id: 3,
        icon: "bx-down-arrow-circle",
        color: "primary",
        type: "Buy",
        currency: "ETH",
        date: "17 Mar, 2020",
        amount: "0.42 ETH",
        price: "$84.32"
    },
    {
        id: 4,
        icon: "bx-down-arrow-circle",
        color: "primary",
        type: "Buy",
        currency: "LTC",
        date: "16 Mar, 2020",
        amount: "1.88 LTC",
        price: "$94.22"
    },
    {
        id: 5,
        icon: "bx-down-arrow-circle",
        color: "primary",
        type: "Buy",
        currency: "BTC",
        date: "14 Mar, 2020",
        amount: "0.016 BTC",
        price: "$125.20"
    },
    {
        id: 6,
        icon: "bx-up-arrow-circle",
        color: "danger",
        type: "Sell",
        currency: "BTC",
        date: "18 Mar, 2020",
        amount: "0.018 BTC",
        price: "$145.80"
    },
    {
        id: 7,
        icon: "bx-up-arrow-circle",
        color: "danger",
        type: "Sell",
        currency: "ETH",
        date: "15 Mar, 2020",
        amount: "0.56 ETH",
        price: "$112.34"
    }
]

const transactionsDataSell = [
    {
        id: 1,
        icon: "bx-down-arrow-circle",
        color: "primary",
        type: "Buy",
        currency: "BTC",
        date: "14 Mar, 2020",
        amount: "0.016 BTC",
        price: "$125.20"
    },
    {
        id: 2,
        icon: "bx-down-arrow-circle",
        color: "primary",
        type: "Buy",
        currency: "LTC",
        date: "16 Mar, 2020",
        amount: "1.88 LTC",
        price: "$94.22"
    },
    {
        id: 3,
        icon: "bx-down-arrow-circle",
        color: "primary",
        type: "Buy",
        currency: "ETH",
        date: "17 Mar, 2020",
        amount: "0.42 ETH",
        price: "$84.32"
    },
    {
        id: 4,
        icon: "bx-up-arrow-circle",
        color: "danger",
        type: "Sell",
        currency: "ETH",
        date: "15 Mar, 2020",
        amount: "0.56 ETH",
        price: "$112.34"
    },
    {
        id: 5,
        icon: "bx-up-arrow-circle",
        color: "danger",
        type: "Sell",
        currency: "BTC",
        date: "18 Mar, 2020",
        amount: "0.018 BTC",
        price: "$145.80"
    },
    {
        id: 6,
        icon: "bx-up-arrow-circle",
        color: "danger",
        type: "Sell",
        currency: "ETH",
        date: "15 Mar, 2020",
        amount: "0.56 ETH",
        price: "$112.34"
    },
    {
        id: 7,
        icon: "bx-down-arrow-circle",
        color: "primary",
        type: "Buy",
        currency: "BTC",
        date: "14 Mar, 2020",
        amount: "0.016 BTC",
        price: "$125.20"
    }
];
const notificationsData = [
    {
        id: 1,
        avatar: img1,
        title: "Donec vitae sapien ut",
        description: "If several languages coalesce, the grammar of the resulting language",
        author: "Joseph",
        date: "12 Mar, 2020"
    },
    {
        id: 2,
        avatar: img2,
        title: "Cras ultricies mi eu turpis",
        description: "To an English person, it will seem like simplified English, as a skeptical cambridge",
        author: "Jerry",
        date: "13 Mar, 2020"
    },
    {
        id: 3,
        avatar: img3,
        title: "Duis arcu tortor suscipit",
        description: "It va esser tam simplic quam occidental in fact, it va esser occidental.",
        author: "Calvin",
        date: "14 Mar, 2020"
    },
    {
        id: 4,
        avatar: img1,
        title: "Donec vitae sapien ut",
        description: "If several languages coalesce, the grammar of the resulting language",
        author: "Joseph",
        date: "12 Mar, 2020"
    }
]

export {
    marchWalletData,
    febWalletData,
    janWalletData,
    decWalletData,
    transactionsDataALL,
    transactionsDataBuy,
    transactionsDataSell,
    notificationsData
};