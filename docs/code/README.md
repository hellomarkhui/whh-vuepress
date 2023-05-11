# 版本管理

::: tip 提示
本栏主要介绍git迭代发版流程，请认真阅读
:::

本栏的主要内容如下：

- [一、迭代发版流程](#一、迭代发版流程)
- [二、线上故障修复](#二、线上故障修复)
- [三、版本回滚](#三、版本回滚)

**版本管理的一般流程如图所示：**

![git版本管理流程](/git-management.png)

## 一、迭代发版流程

版本管理的一般流程如上图所示，每次正常的迭代为 A 到 M 的过程。  


1. **本次迭代版本的起点 A 。如图所示，标签 Tag0.1 其实是上一次迭代的终点，之所以打上版本标签，为了方便版本的回退管理。**

  ::: tip 操作示例

  - 1）切换到 main 分支，打上标签并录入备注信息
  ``` bash
  $ git tag -a v0.0.0 -m "初始版本"
  ```

  - 2）推送标签到远程服务器，命令：`git push origin <tagname>`
  ``` bash
  $ git push origin v0.0.0
  ```
  :::

2. **首次迭代时需要创建 develop 分支（如图中 B），并推送到远程服务，后续的迭代不需要创建开发分支，开发分支是持续存在的。**

  ::: tip 操作示例

  1. 切换到 main 分支: `$ git branch main`
  2. 创建开发分支：`$ git branch develop`
  3. 切换到开发分支：`$ git checkout develop`
  4. 推送到远程服务器并绑定跟踪：`$ git push --set-upstream origin develop`

  :::

3. **开发人员接到功能开发任务后，从 develop 分支拉取本地 features 分支（此分支不可推送到远程服务器），进行功能开发，并自测（如图 E、D、G、F）**

  ::: tip 示例

  1. 切换到开发分支：`$ git checkout develop`
  2. 创建功能特性分支：`$ git branch features_xxx`
  3. 切换到开发分支：`$ git checkout features_xxx`

  :::

4. **各开发人员的版本功能开发完成后，本地自测没问题，就把本地的 features 分支合并到 develop 分支（如图 H）。**

  ::: tip 一般操作步骤示例:

  1. 切换 develop 分支: `$ git checkout develop`
  2. Pull 最新的 develop 代码（即：git pull = git fetch + git merge）：`$git pull`
  3. 本地合并分支（注意，当前分支应该为 develop）,如有冲突，请自行消除冲突：`$git merge features_xxx`
  4. 推送到远程 develop 分支。
  5. 测试 develop 分支代码功能是否正常。

  :::

5. **合并完 develop 并检查运行正常后。进入提测阶段，创建预发版本，如 Release1.0.0。（如图中的 I 点）**

  ::: tip 步骤示例:

  1. 在 develop 分支下创建预发版本分支 ：`$ git branch release1.0.0`
  2. 切换到 release 分支 ： `$ git checkout release1.0.0`
  3. 推送分支到远程服务器并绑定跟踪：`$ git push --set-upstream origin release1.0.0`

  :::

6. **测试人员通过流水线发版工具，对 Release 分支进行测试发版。测试过程中的 bug，都在 Release 分支上进行修复。**

7. **合并完 develop 并检查运行正常后。进入提测阶段，创建预发版本，如 Release1.0.0。（如图中的 I 点）**

  ::: tip 步骤示例:

  1. 切到 main 分支：`$ git checkout main`
  2. 合并 Release 分支：`$ git merge release1.0.0`
  3. 推送到远程服务器：`$ git push`
  4. 打上标签：`$ git tag -a v1.0.0 -m "初始版本"`
  5. 推送标签：`$ git push origin v1.0.0`
  6. 切换到 `develop 分支：$ git checkout develop`
  7. 合并 `Release 分支：$ git merge release1.0.0`
  8. 推送到远程服务器：`$ git push`

  :::

8. **删除 Release 分支，本次迭代完成。**

  ::: tip 步骤示例:

  1. 删除本地分支：`$ git branch -d release1.0.0`
  2. 删除远程分支：`$ git push origin --delete release1.0.0`

  :::

## 二、线上故障修复

1. **生产系统发现有 bug，需要紧急修复的，拉取 hotfix 分支进行修复（如图中 N 点）**

  ::: tip 步骤示例:

  1. 切换到 main 分支 : `$ git checkout main`
  2. 创建 hotfix 分支：`$ git branch hotfix`
  3. 切换到 hotfix 分支： `$ git checkout`
  4. 推送分支到远程服务器并绑定跟踪：`$ git push --set-upstream origin hotfix`
  5. 对应的开发人员同步 hotfix 分支进行修复。
  6. 修复完成后合并到 main 分支与 develop 分支，main 分支打上 tag（操作参考上面的第 7 条）
  7. 删除 hotfix 分支，（参考上面第 8 条）

  :::

## 三、版本回滚

如果生产上线后，版本出现严重线上问题，需要回滚的情况。可依据 tag 标签 checkout 出对应的分支进行发版。

  - 1）在 jenkins 发版时，分支里选择对应的 tag 标签即可