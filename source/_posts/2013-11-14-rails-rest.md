---
layout: post
title: '[Rails] RESTful'
date: 2013-11-14 10:45
comments: true
categories: 
---
<table border="1">
        <tr>
            <td>Action</td>
            <td>helpers</td>
            <td>Verb</td>
            <td>Path</td>
        </tr>
        <tr>
            <td>index</td>
            <td>groups_path</td>
            <td>GET</td>
            <td>/groups</td>
        </tr>
        <tr>
            <td>show</td>
            <td>group_path(@group)</td>
            <td>GET</td>
            <td>/groups/1</td>
        </tr>
        <tr>
            <td>new</td>
            <td>new_group_path</td>
            <td>GET</td>
            <td>/groups/new</td>
        </tr>
        <tr>
            <td>create</td>
            <td>groups_path</td>
            <td>POST</td>
            <td>/groups</td>
        </tr>
        <tr>
            <td>edit</td>
            <td>edit_group_path(@group)</td>
            <td>GET</td>
            <td>/groups/1/edit</td>
        </tr>
        <tr>
            <td>update</td>
            <td>group_path(@group)</td>
            <td>PUT</td>
            <td>/groups/1</td>
        </tr>
        <tr>
            <td>destroy</td>
            <td>group_path(@group)</td>
            <td>DELETE</td>
            <td>/groups/1</td>
        </tr>
    </table>