# transactionSender
# Отправка транзакций Ethereum - README

## Обзор

Этот проект представляет собой простое React-приложение для отправки транзакций Ethereum с использованием библиотеки ethers.js. Он позволяет пользователям вводить адрес получателя и сумму Ether для отправки, а затем отправляет транзакцию через подключенный Ethereum-кошелек (например, MetaMask).

## Предварительные требования

Перед началом убедитесь, что у вас установлено следующее:

- Node.js
- npm (Node Package Manager) или yarn
- Расширение Ethereum-кошелька (например, MetaMask) установлено в вашем браузере

## Начало работы

Следуйте этим шагам, чтобы запустить проект:

### 1. Клонируйте репозиторий

```bash
git clone https://github.com/vartcall/transactionSender
cd transactionSender
```

### 2. Установите зависимости

```bash
npm install
```
или
```bash
yarn install
```

### 3. Запустите приложение

```bash
npm start
```
или
```bash
yarn start
```

Это запустит приложение в режиме разработки. Откройте [http://localhost:3000](http://localhost:3000), чтобы увидеть его в браузере.

## Как использовать

1. **Подключите ваш Ethereum-кошелек**: Убедитесь, что ваш Ethereum-кошелек (например, MetaMask) подключен и разблокирован в вашем браузере.
2. **Введите адрес получателя**: В поле "User Address" введите Ethereum-адрес получателя.
3. **Введите сумму**: В поле "Sum in $ETH" введите сумму Ether, которую вы хотите отправить.
4. **Отправьте транзакцию**: Нажмите кнопку "Send", чтобы инициировать транзакцию.

## Объяснение кода

Разберем основные части кода:

### Импорт зависимостей

```javascript
import {useRef} from "react";
import {ethers, parseEther, BrowserProvider} from "ethers";
```

### Компонент App

Основной компонент приложения:

```javascript
export default function App() {
    const toRef = useRef(null);
    const amountRef = useRef(null);

    const handleSendEther = async (e) => {
        e.preventDefault();

        try {
            const provider = new BrowserProvider(window.ethereum);
            const signer = await provider.getSigner();
            const tx = await signer.sendTransaction({
                to: toRef.current?.value,
                value: parseEther(amountRef.current?.value || "0"),
            });
            console.log(tx);
            const response = await tx.wait();
            console.log(response);
        } catch(error){
            console.error(error);
        }
    };

    return (
        <>
            <h2>Send Ethereum</h2>
            <form onSubmit={handleSendEther} className="form-container">
                <label className="form-label">
                    User Address
                    <input
                        ref={toRef}
                        type="text"
                        className="form-input"
                    />
                </label>
                <label className="form-label">
                    Sum in $ETH
                    <input
                        type="text"
                        ref={amountRef}
                        className="form-input"
                    />
                </label>
                <button type="submit" className="form-button">Send</button>
            </form>
        </>
    );
}
```

### Объяснение

1. **useRef Hooks**: `toRef` и `amountRef` - это ссылки на поля ввода для адреса получателя и суммы Ether.
2. **Функция handleSendEther**: Эта функция вызывается при отправке формы. Она подключается к Ethereum-кошельку пользователя, получает подписанта и отправляет транзакцию.
3. **Форма**: Форма содержит поля ввода для адреса получателя и суммы Ether, а также кнопку для отправки формы.

## Вклад

Если вы хотите внести свой вклад в этот проект, пожалуйста, форкните репозиторий и создайте pull request с вашими изменениями. Убедитесь, что ваш код соответствует существующему стилю и включает соответствующие тесты.

--- 

Если у вас есть вопросы или вам нужна дополнительная помощь, не стесняйтесь обращаться!

### Создатель
Проект создан [vartcall](https://github.com/vartcall)
---

---
