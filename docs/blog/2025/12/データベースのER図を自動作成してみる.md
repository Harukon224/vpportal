---
title: データベースのER図を自動作成してみる
categories:
  - .NET
  - Database
  - Oracle
createdDate: 2025-12-20
---

::: warning TODO: あとでちゃんとまとめる
:::

.NET Standard2.0 クラスライブラリとして―

**自　作**

[NuGet ライブラリページ](https://www.nuget.org/packages/HK224.DBSchemaReader)

---
[[toc]]
---

## 経緯
外部のツールやライブラリを自由に使えない環境でも、ER図を簡単にリバース生成したかったので作成。

## 使い方
1. `DbConnection`型戻り値を返す関数を引数として渡して`DBSchemaReader`クラスをインスタンス化
2. `string`型スキーマ名引数を渡して`GetSchema`メソッド実行で、独自の`Schema`クラス型インスタンスを返却
3. 列情報のテンプレート文字列を引数として渡して`MermaidERDBuilder`クラスをインスタンス化
4. `ISchema`型の引数を渡して`GetERDiagramText`メソッドでMermaidのER図テキストを返却

## 追記
Oracleのサンプルスキーマ HRでのみ確認済み。