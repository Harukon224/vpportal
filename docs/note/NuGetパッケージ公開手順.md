---
title: NuGetパッケージ公開手順
categories:
  - .NET
createdDate: 2025-12-04
---

[[toc]]

## プロジェクトプロパティの設定
Visual Studio ソリューションエクスプローラーでプロジェクトを右クリック→プロパティ

or

csprojファイルをテキストエディタで編集

::: tip
既にNuGetに公開されているパッケージと同じパッケージ名だとNuGetに公開できないので注意
:::

## パッケージファイルの作成
1. ビルド対象をリリースビルドに切り替える
2. Visual Studio ソリューションエクスプローラーでプロジェクトを右クリック→パック

## パッケージの公開
パックしたnupkgファイルがあるフォルダ直下でパッケージ公開のためのコマンドを実行
```batch
dotnet nuget push packagefile.nupkg --api-key apikey --source https://api.nuget.org/v3/index.json
```