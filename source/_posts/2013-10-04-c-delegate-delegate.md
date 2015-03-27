---
layout: post
title: '[C#]  Delegate 委派'
date: 2013-10-04 14:22
comments: true
categories: 
---
Delegate 是 C# 的特殊型別，用來定義方法（method/function）的 signature，delegate 的實體（instance）可以存放一或多個符合該 signature 的方法。這樣講也許還是鴨子聽雷，不如我們實際來感受一下吧！
--
delegate實例獨立於它所封裝的方法的類
這邊在個multicst delegate的例子
using System;

class MulticastTester
{
    delegate void Greeting();
    
    public static void Main()
    {
        Greeting myGreeting = new Greeting(SayThankYou);
        Console.WriteLine("My single greeting:");
        myGreeting();
        
        Greeting yourGreeting = new Greeting(SayGoodMorning);        
        Console.WriteLine("\nYour single greeting:");
        yourGreeting();
        
        Greeting ourGreeting = myGreeting + yourGreeting;
        Console.WriteLine("\nOur multicast greeting:");
        ourGreeting();

        ourGreeting += new Greeting(SayGoodnight);
        Console.WriteLine("\nMulticast greeting which includes Goodnight:");
        ourGreeting();
        
        ourGreeting = ourGreeting - yourGreeting;
        Console.WriteLine("\nMulticast greeting without your greeting:");
        ourGreeting();
        
        ourGreeting -= myGreeting;
        Console.WriteLine("\nSingle greeting without your greeting and my greeting:");
        ourGreeting();
    }
    
    public static void SayThankYou()
    {
        Console.WriteLine("Thank you!");
    }

    public static void SayGoodMorning()
    {
        Console.WriteLine("Good morning!");
    }

    public static void SayGoodnight()
    {
        Console.WriteLine("Goodnight");
    }
}
