---
layout: post
title:  "Return Early Pattern"
date:   2020-05-31 17:51:10 -0700
categories: javascript pattern
published: true
hiddenNotes: "learned early pattern from Jeff during code review"
---
<article>
    <h3>The Return Early Pattern</h3>
    <section>
        <p>This:</p>
        <pre><code>function getErrorMessage(someObject) {
    let errorMessage;
    if (someObject && someOtherObject) {
        errorMessage = "This isn't working because of a tornado.";
    } else if (someObject || someOtherOtherObject) {
        errorMessage = "You're not allowed to visit";
    } else {
        errorMessage = "I don't know what happened."
    }
    return errorMessage;
}</code></pre>
        <p>is not as readable as this:</p>
<pre><code>function getErrorMessage(someObject) {
    if (someObject && someOtherObject) {
        return "This isn't working because of a tornado.";
    }
    if (someObject || someOtherOtherObject) {
        return "You're not allowed to visit.";
    }
    return "I don't know what happened.";
}</code></pre>
    </section>
    <section>
        <ul>
            <li>Performance is better (not that significant)</li>
            <li>Pattern only makes sense if return statements aren't scattered all over the place </li>
        </ul>
        <p>Source: I learned this during code review at work.</p>
    </section>
</article>