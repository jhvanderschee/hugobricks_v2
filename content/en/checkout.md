---
title: Checkout
---

# Checkout

<form action="/payment/" method="post">
    <fieldset>
        <legend>Delivery details</legend>
        <p><label for="firstname">First name</label><input id="firstname" name="firstname" type="text" autocomplete="given-name" required></p>
        <p><label for="lastname">Last name</label><input id="lastname" name="lastname" type="text" autocomplete="family-name" required></p>
        <p><label for="email">Email address</label><input id="email" name="email" type="email" autocomplete="email" required></p>
        <p><label for="address">Address</label><input id="address" name="address" type="text" autocomplete="street-address" required></p>
        <p><label for="zipcode">Zipcode</label><input id="zipcode" name="zipcode" type="text" autocomplete="postal-code" required></p>
        <p><label for="city">City</label><input id="city" name="city" type="text" autocomplete="address-level2" required></p>
        <p>
            <label for="shipping">Shipping</label>
            <select id="shipping" name="shipping" required>
                <option value="">Choose a shipping option</option>
                <option value="Shipping NL">The Netherlands (+ $0.00)</option>
                <option value="Shipping EU">European Union (+ $7.50)</option>
                <option value="Shipping World">Rest of the world (+ $15.00)</option>
            </select>
        </p>
        <p><label for="country">Country</label><input id="country" name="country" type="text" autocomplete="country-name" required></p>
    </fieldset>
    <fieldset>
        <legend>Gift wrapping</legend>
        <p><label><input type="radio" name="gift-wrapping" value="no" checked> Not gift wrapped</label></p>
        <p><label><input type="radio" name="gift-wrapping" value="yes"> Gift wrapped (+ $2.00)</label></p>
    </fieldset>
    <fieldset>
        <legend>Custom engraving</legend>
        <p><label><input type="radio" name="custom-engraving" value="no" checked> No engraving</label></p>
        <p><label><input type="radio" name="custom-engraving" value="yes"> Custom engraved (+ $20.00)</label></p>
    </fieldset>
    <p><label for="message">Message</label><textarea id="message" name="message" rows="4"></textarea></p>
    <p class="submitbutton"><a href="/cart/">Back to cart</a> <button class="button" type="submit">Proceed to payment</button></p>
</form>

<div>
    <p class="calculation">
        <span>Shopping cart:</span> $ 11.25<br>
        <span>Shipping NL:</span> $ 0.00<br>
        <span class="sum">Payment total:</span> <strong>$ 11.25</strong>
    </p>
    <p><em>Payments are 100% secure and will be handled by either Mollie's Paylink service, called Plink, or PayPal.me. In the next screen you will be redirected to a secure checkout process on either useplink.com or paypal.me.</em></p>
</div>

<ol class="progress">
    <li class="past"><a href="/cart/">Cart</a></li>
    <li class="current"><a href="/checkout/" aria-current="step">Checkout</a></li>
    <li>Payment</li>
</ol>
