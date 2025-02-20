import{_ as a,c as o,b as t,d as n,e as i,f as c,a as d,r as l,o as r}from"./app-CGKNQFnW.js";const p={},h={class:"hint-container tip"};function u(m,e){const s=l("RouteLink");return r(),o("div",null,[e[4]||(e[4]=t("h1",{id:"guide-notation",tabindex:"-1"},[t("a",{class:"header-anchor",href:"#guide-notation"},[t("span",null,"Guide notation")])],-1)),e[5]||(e[5]=t("p",null,"Throughout this guide, you will find certain notations in certain parts of code, explanations, etc. To help you understand the content within the guide, we will be going over some standard notations used in this guide. Do note that this isn't official Java syntax, and trying to use this as syntax will give you an error.",-1)),t("div",h,[e[3]||(e[3]=t("p",{class:"hint-container-title"},"Tips",-1)),t("p",null,[e[1]||(e[1]=n("This section is meant for the ")),i(s,{to:"/cs4/1/variables.html"},{default:c(()=>e[0]||(e[0]=[n("Java Guide (CS4)")])),_:1}),e[2]||(e[2]=n("."))])]),e[6]||(e[6]=d(`<h2 id="classes" tabindex="-1"><a class="header-anchor" href="#classes"><span>Classes</span></a></h2><p>The notation <code>&lt;Class&gt;</code> means an instance of the <code>Class</code> class. For example, a snippet like <code>&lt;Class&gt;.main()</code> refers to the instance method <code>main()</code> of the <code>Class</code> class, while a snippet like <code>Class.main()</code> refers to the static method <code>main()</code> of the <code>Class</code> class.</p><p>Additionally, the <code>#</code> symbol can refer to an instance field of the class. From our example above, <code>Class#main</code> also refers to the <strong>instance</strong> method <code>main()</code>, and not the <strong>static</strong> method <code>main()</code>.</p><p>We can extend this notation further, such as using method signatures. For example, imagine a class <code>Overload</code> with two instance methods: <code>myMethod(int number)</code> and <code>myMethod(String text)</code>. When we want to refer to <code>myMethod(String text)</code>, we can write the notation as such: <code>Overload#myMethod(String)</code> or <code>&lt;Overload&gt;.myMethod(String)</code>. When writing method signatures, only the type is written, and the variable is excluded.</p><p>For a quick recap, refer to the examples below.</p><ul><li><code>&lt;Class&gt;.main()</code> and <code>Class#main()</code> refers to the <strong>instance</strong> method <code>main()</code> of the <code>Class</code> class.</li><li><code>Class.main()</code> refers to the <strong>static</strong> method <code>main()</code> of the <code>Class</code> class.</li><li><code>&lt;Class&gt;.property</code> and <code>Class#property</code> refers to the <strong>instance</strong> field <code>property</code> of the <code>Class</code> class.</li><li><code>Class.property</code> refers to the <strong>static</strong> field property of the <code>Class</code> class.</li><li><code>&lt;Class&gt;.main(String, int)</code> and <code>Class#main(String, int)</code> refers to the <strong>instance</strong> method <code>main()</code> of the <code>Class</code> class with the arguments being <code>(String, int)</code>.</li><li><code>Class.main(String, int)</code> refers to the <strong>static</strong> method <code>main()</code> of the <code>Class</code> class with the arguments being <code>(String, int)</code>.</li></ul><h3 id="section-declared-code" tabindex="-1"><a class="header-anchor" href="#section-declared-code"><span>Section-declared code</span></a></h3><p>It is important to note that this notation will only refer to methods or fields that are not explicitly declared in that section. Take a look at the snippet below as an example.</p><div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre><code><span class="line"><span class="token class-name">Scanner</span> input <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Scanner</span><span class="token punctuation">(</span><span class="token class-name">System</span><span class="token punctuation">.</span>in<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;What is your name: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token class-name">String</span> name <span class="token operator">=</span> input<span class="token punctuation">.</span><span class="token function">nextLine</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Here, <code>input.nextLine()</code> refers to the method <code>input.nextLine()</code> as declared in the snippet, and not the static method <code>nextLine()</code> of the class <code>input</code>.</p><p>What about <code>input.next()</code>? Would that refer to the static method <code>next()</code> of the class <code>input</code>? The answer is no, since <code>input</code> is already &quot;declared&quot; as an instance of <code>Scanner</code> in the code snippet above.</p>`,11))])}const f=a(p,[["render",u],["__file","notation.html.vue"]]),k=JSON.parse('{"path":"/notation.html","title":"Guide notation","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"Classes","slug":"classes","link":"#classes","children":[{"level":3,"title":"Section-declared code","slug":"section-declared-code","link":"#section-declared-code","children":[]}]}],"git":{"updatedTime":1737561594000},"filePathRelative":"notation.md"}');export{f as comp,k as data};
