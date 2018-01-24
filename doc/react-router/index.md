https://www.sitepoint.com/react-router-v4-complete-guide/

### exact 的props作用
exact 用于精确匹配路径，不用exact也会匹配到匹配的路径的自路径，这样两个路由组件都会显示，我们需要每次切换的时候只会显示一个Route中指定的组件。

### 顺序问题
```
<Switch>
  <Route path="/" exact component={HomePage}/>
  <Route path="/user/add" component={UserMenu} />
  <Route path="/user" component={UserPage} />
<Switch>
```
在Switch中只有一个<Route>会被渲染，另外，我们还要给HomePahe所在的<Route>添加exact，否则在访问/user或/user/add的时候还会匹配到/,从而只是渲染 HomePage。同理我们将/user/add放在/user前面是保证正确匹配的很有策略性的一步，因为/user/add会同时匹配/user和/user/add，如果不这么做交换位置，会出现问题。

### 嵌套布局
1. 默认方式
```
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/user" exact component={BrowseUsersPage} />
    <Route path="/user/:userId" component={UserProfilePage} />
  </Switch>
```

BrowseUsersPage 和 UserProfilePage代码如下
```
const BrowseUsersPage = () => 
  <div>
    <UserNav/>
    BrowseUsersPage
  </div>

const UserProfilePage = () => 
  <div>
    <UserNav/>
    UserProfilePage
  </div>
```
问题:两个 User页面都有一个<UserNav/> 组件，这会明显导致不必要的请求。会消耗很多不必要的流量。

2. 子布局承担渲染routes的任务
```
  <Switch>
    <Route path="/" exact component={HomePage} />
    <Route path="/user" exact component={UserSubLayout} />
  </Switch>
```

```
const UserSubLayout = () => 
<div>
  <UserNav />
  <Switch>
    <Route path="/user" exact component={BrowseUsersPage} />
    <Route path="/user/:userId" component={UserProfilePage} />
  </Switch>
</div>
```