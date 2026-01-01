---
createdDate: 2025-01-01
categories:
  - Git
---

[[toc]]

## リポジトリ作成
```bash
git init
```

## 全てのファイルをステージングエリアに追加
```bash
git add .
```

## コミット
```bash
git commit -m "{{commitMessage}}"
```

## コミットの上書き
```bash
git commit --amend --no-edit
```

## リモートリポジトリ参照の追加
```bash
git remote add origin {{url}}
```

## リモートリポジトリにローカルリポジトリの変更を反映
```bash
git push origin main
```

## サブツリーとして取り込み
```bash
git subtree add --prefix={{directory}} {{url}} main --squash -m "{{commitMessage}}"
```

## サブツリーの変更をマージ
```bash
git subtree pull --prefix={{directory}} {{url}} main --squash -m "{{commitMessage}}"
```