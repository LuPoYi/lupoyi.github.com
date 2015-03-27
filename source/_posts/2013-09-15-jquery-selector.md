---
layout: post
title: '[jQuery] Selector'
date: 2013-09-15 12:29
comments: true
categories: [jquery]
---
# jQuery物件有下列三種：

$("a")　 $("table")　 $("div")　 :直接指定Tag類別

$("#myTable")　 :直接指定ID

$(".clsInput")　 :指定使用此CSS的元件



<br>


## jQuery Selector 常用清單
<div>
<table class="dataintable">
<tr>
<th>選擇器</th>
<th>實例</th>
<th>選取</th>
</tr>

<tr>
<td><a href="/jquery/selector_all.asp" title="jQuery * 選擇器">*</a></td>
<td>$(&quot;*&quot;)</td>
<td>所有元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_id.asp" title="jQuery # 選擇器">#<i>id</i></a></td>
<td>$(&quot;#lastname&quot;)</td>
<td>id=&quot;lastname&quot; 的元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_class.asp" title="jQuery . 選擇器">.<i>class</i></a></td>
<td>$(&quot;.intro&quot;)</td>
<td>所有 class=&quot;intro&quot; 的元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_element.asp" title="jQuery element 選擇器"><i>element</i></a></td>
<td>$(&quot;p&quot;)</td>
<td>所有 &lt;p&gt; 元素</td>
</tr>

<tr>
<td>.<i>class</i>.<i>class</i></td>
<td>$(&quot;.intro.demo&quot;)</td>
<td>所有 class=&quot;intro&quot; 且 class=&quot;demo&quot; 的元素</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td><a href="/jquery/selector_first.asp" title="jQuery :first 選擇器">:first</a></td>
<td>$(&quot;p:first&quot;)</td>
<td>第一個 &lt;p&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_last.asp" title="jQuery :last 選擇器">:last</a></td>
<td>$(&quot;p:last&quot;)</td>
<td>最後一個 &lt;p&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_even.asp" title="jQuery :even 選擇器">:even</a></td>
<td>$(&quot;tr:even&quot;)</td>
<td>所有偶數 &lt;tr&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_odd.asp" title="jQuery :odd 選擇器">:odd</a></td>
<td>$(&quot;tr:odd&quot;)</td>
<td>所有奇數 &lt;tr&gt; 元素</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td><a href="/jquery/selector_eq.asp" title="jQuery :eq() 選擇器">:eq(<i>index</i>)</a></td>
<td>$(&quot;ul li:eq(3)&quot;)</td>
<td>清單中的第四個元素（index 從 0 開始）</td>
</tr>

<tr>
<td><a href="/jquery/selector_gt.asp" title="jQuery :gt 選擇器">:gt(<i>no</i>)</a></td>
<td>$(&quot;ul li:gt(3)&quot;)</td>
<td>列出 index 大於 3 的元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_lt.asp" title="jQuery :lt 選擇器">:lt(<i>no</i>)</a></td>
<td>$(&quot;ul li:lt(3)&quot;)</td>
<td>列出 index 小於 3 的元素</td>
</tr>

<tr>
<td>:not(<i>selector</i>)</td>
<td>$(&quot;input:not(:empty)&quot;)</td>
<td>所有不為空的 input 元素</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td><a href="/jquery/selector_header.asp" title="jQuery :header 選擇器">:header</a></td>
<td>$(&quot;:header&quot;)</td>
<td>所有標題元素 &lt;h1&gt; - &lt;h6&gt;</td>
</tr>

<tr>
<td><a href="/jquery/selector_animated.asp" title="jQuery :animated 選擇器">:animated</a></td>
<td>&nbsp;</td>
<td>所有動畫元素</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td><a href="/jquery/selector_contains.asp" title="jQuery :contains 選擇器">:contains(<i>text</i>)</a></td>
<td>$(&quot;:contains('W3School')&quot;)</td>
<td>包含指定字串的所有元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_empty.asp" title="jQuery :empty 選擇器">:empty</a></td>
<td>$(&quot;:empty&quot;)</td>
<td>無子（元素）節點的所有元素</td>
</tr>

<tr>
<td>:hidden</td>
<td>$(&quot;p:hidden&quot;)</td>
<td>所有隱藏的 &lt;p&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_visible.asp" title="jQuery :visible 選擇器">:visible</a></td>
<td>$(&quot;table:visible&quot;)</td>
<td>所有可見的表格</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td>s1,s2,s3</td>
<td>$(&quot;th,td,.intro&quot;)</td>
<td>所有帶有匹配選擇的元素</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td><a href="/jquery/selector_attribute.asp" title="jQuery [attribute] 選擇器">[<i>attribute</i>]</a></td>
<td>$(&quot;[href]&quot;)</td>
<td>所有帶有 href 屬性的元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_attribute_equal_value.asp" title="jQuery [attribute=value] 選擇器">[<i>attribute</i>=<i>value</i>]</a></td>
<td>$(&quot;[href='#']&quot;)</td>
<td>所有 href 屬性的值等於 &quot;#&quot; 的元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_attribute_notequal_value.asp" title="jQuery [attribute!=value] 選擇器">[<i>attribute</i>!=<i>value</i>]</a></td>
<td>$(&quot;[href!='#']&quot;)</td>
<td>所有 href 屬性的值不等於 &quot;#&quot; 的元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_attribute_end_value.asp" title="jQuery [attribute$=value] 選擇器">[<i>attribute</i>$=<i>value</i>]</a></td>
<td>$(&quot;[href$='.jpg']&quot;)</td>
<td>所有 href 屬性的值包含以 &quot;.jpg&quot; 結尾的元素</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td><a href="/jquery/selector_input.asp" title="jQuery :input 選擇器">:input</a></td>
<td>$(&quot;:input&quot;)</td>
<td>所有 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_text.asp" title="jQuery :text 選擇器">:text</a></td>
<td>$(&quot;:text&quot;)</td>
<td>所有 type=&quot;text&quot; 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_password.asp" title="jQuery :password 選擇器">:password</a></td>
<td>$(&quot;:password&quot;)</td>
<td>所有 type=&quot;password&quot; 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_radio.asp" title="jQuery :radio 選擇器">:radio</a></td>
<td>$(&quot;:radio&quot;)</td>
<td>所有 type=&quot;radio&quot; 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_checkbox.asp" title="jQuery :checkbox 選擇器">:checkbox</a></td>
<td>$(&quot;:checkbox&quot;)</td>
<td>所有 type=&quot;checkbox&quot; 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_submit.asp" title="jQuery :submit 選擇器">:submit</a></td>
<td>$(&quot;:submit&quot;)</td>
<td>所有 type=&quot;submit&quot; 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_reset.asp" title="jQuery :reset 選擇器">:reset</a></td>
<td>$(&quot;:reset&quot;)</td>
<td>所有 type=&quot;reset&quot; 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_button.asp" title="jQuery :button 選擇器">:button</a></td>
<td>$(&quot;:button&quot;)</td>
<td>所有 type=&quot;button&quot; 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_image.asp" title="jQuery :image 選擇器">:image</a></td>
<td>$(&quot;:image&quot;)</td>
<td>所有 type=&quot;image&quot; 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_file.asp" title="jQuery :file 選擇器">:file</a></td>
<td>$(&quot;:file&quot;)</td>
<td>所有 type=&quot;file&quot; 的 &lt;input&gt; 元素</td>
</tr>

<tr>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
<td style="background-color:#fff;">&nbsp;</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_enabled.asp" title="jQuery :enabled 選擇器">:enabled</a></td>
<td>$(&quot;:enabled&quot;)</td>
<td>所有啟動的 input 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_disabled.asp" title="jQuery :disabled 選擇器">:disabled</a></td>
<td>$(&quot;:disabled&quot;)</td>
<td>所有禁用的 input 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_selected.asp" title="jQuery :selected 選擇器">:selected</a></td>
<td>$(&quot;:selected&quot;)</td>
<td>所有被選取的 input 元素</td>
</tr>

<tr>
<td><a href="/jquery/selector_input_checked.asp" title="jQuery :checked 選擇器">:checked</a></td>
<td>$(&quot;:checked&quot;)</td>
<td>所有被選中的 input 元素</td>
</tr>
</table>
</div>

Reference:
http://my-web-design.blogspot.tw/2012/05/jquery-selectors.html